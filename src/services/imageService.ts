// src/services/imageService.ts

import { GeminiAPI } from '../integrations/geminiAPI';
import { ImageRepository } from '../repositories/imageRepository';
import { ReadingRepository } from '../repositories/readingRepository';
import { v4 as uuidv4 } from 'uuid';
import { CreateReadingDTO } from '../dtos/createReadingDTO';
import { CreateImageDTO } from '../dtos/createImageDTO';

export class ImageService {
    private imageRepository: ImageRepository;
    private readingRepository: ReadingRepository;

    constructor() {
        this.imageRepository = new ImageRepository();
        this.readingRepository = new ReadingRepository();
    }

    async processImage({ image, customerCode, measureDatetime, measureType }: any) {
        // Validações aqui...

        const existingReading = await this.readingRepository.findReadingByMonth(
            customerCode,
            measureType,
            measureDatetime.getMonth() + 1,
            measureDatetime.getFullYear()
        );

        if (existingReading) {
            throw {
                status: 409,
                code: 'DOUBLE_REPORT',
                message: 'Leitura do mês já realizada',
            };
        }

        // Integração com a API do Gemini
        const geminiResponse = await GeminiAPI.analyzeImage(image);

        // Gerar UUID para a nova leitura
        const measureUuid = uuidv4();

        // Criar a entidade de imagem
        const imageEntity = await this.imageRepository.create({
            customer_code: customerCode,
            image_url: geminiResponse.imageUrl,
        } as CreateImageDTO);

        // Criar a entidade de leitura
        const readingEntity = await this.readingRepository.create({
            customer_code: customerCode,
            measure_uuid: measureUuid,
            measure_datetime: measureDatetime,
            measure_type: measureType,
            value: geminiResponse.measureValue,
        } as CreateReadingDTO);

        return {
            image_url: geminiResponse.imageUrl,
            measure_value: geminiResponse.measureValue,
            measure_uuid: readingEntity.measureUuid,
        };
    }
}

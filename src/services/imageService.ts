import axios from 'axios';
import { ImageRepository } from '../repositories/imageRepository';

export class ImageService {
    static async processImage(customer_code: string, measure_datetime: string, measure_type: string, image: string) {
        const apiResponse = await axios.post('https://api.google-gemini.com/vision', {
            image,
            // Outros dados necessários para a API
        });

        const imageUrl = apiResponse.data.imageUrl;
        const imageRepository = new ImageRepository();
        return await imageRepository.create({ customer_code, image_url: imageUrl });
    }
}

import { prisma } from '../database/index';
import { CreateImageDTO } from '../dtos/createImageDTO';
import { ImageEntity } from '../entities/imageEntity';

export class ImageRepository {
    async create(data: CreateImageDTO): Promise<ImageEntity> {
        const image = await prisma.image.create({
            data: {
                customerCode: data.customer_code,
                imageUrl: data.image_url,
            },
        });
        return new ImageEntity(image.id, image.customerCode, image.imageUrl, image.createdAt, image.updatedAt);
    }
}


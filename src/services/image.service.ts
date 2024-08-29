import { Image } from "../entities/image.entity";
import { GetImageDTO } from "../dtos/image.dto";
import { ImageRepository } from "../repositories/image.repository";

export class ImageService {
    private imageRepository = new ImageRepository();

    async getImage(imageData: GetImageDTO): Promise<Image | null> {
        const image = await this.imageRepository.findById(imageData.id);

        if (!image) throw new Error("Imagem não encontrada");
        return image;
    }
}

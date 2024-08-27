import { Request, Response } from 'express';
import { ImageService } from '../services/imageService';

export class ImageController {
    static async uploadImage(req: Request, res: Response) {
        try {
            const { customer_code, measure_datetime, measure_type, image } = req.body;
            const result = await ImageService.processImage(customer_code, measure_datetime, measure_type, image);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to process image' });
        }
    }
}

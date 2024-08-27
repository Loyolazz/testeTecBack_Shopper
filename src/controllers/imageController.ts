import { Request, Response } from 'express';
import { ImageService } from '../services/imageService';

const imageService = new ImageService();

export const uploadImage = async (req: Request, res: Response) => {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    try {
        const result = await imageService.processImage({
            image,
            customerCode: customer_code,
            measureDatetime: new Date(measure_datetime),
            measureType: measure_type,
        });

        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(error.status || 500).json({
            error_code: error.code || 'INTERNAL_SERVER_ERROR',
            error_description: error.message,
        });
    }
};
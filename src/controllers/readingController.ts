import { Request, Response } from 'express';
import { ReadingService } from '../services/readingService';

export class ReadingController {
    static async confirmReading(req: Request, res: Response) {
        try {
            const { measure_uuid, confirmed_value } = req.body;
            await ReadingService.confirmReading(measure_uuid, confirmed_value);
            res.status(200).json({ message: 'Reading confirmed' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to confirm reading' });
        }
    }

    static async listReadings(req: Request, res: Response) {
        try {
            const { customer_code } = req.params;
            const { measure_type } = req.query;
            const readings = await ReadingService.listReadings(customer_code, measure_type as string);
            res.status(200).json(readings);
        } catch (error) {
            res.status(500).json({ error: 'Failed to list readings' });
        }
    }
}

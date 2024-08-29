import { Request, Response } from "express";
import { ReadingService } from "../services/reading.service";
import { ConfirmReadingDTO, CreateReadingDTORequest } from "../dtos/reading.dto";

const readingService = new ReadingService();

export const createReading = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: CreateReadingDTORequest = req.body;

        const reading = await readingService.createReading(dto);

        res.status(200).json({
            image_url: `${process.env.BASE_URL}/image/${reading.image_id}`,
            measure_value: reading.measure_value,
            measure_uuid: reading.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro cadastrar leitura" });
    }
};

export const confirmReading = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: ConfirmReadingDTO = req.body;
        await readingService.confirmReading(dto);

        res.status(200).send({ success: true });
    } catch (error) {
        console.log(error)
        if (error == "404")
            res.status(404).json({
                error_code: "MEASURE_NOT_FOUND",
                error_description: "Leitura do mês já realizada",
            });

        if (error == "409")
            res.status(409).json({
                error_code: "CONFIRMATION_DUPLICATE",
                error_description: "Leitura do mês já realizada",
            });

        res.status(500).json({ error });
    }
};

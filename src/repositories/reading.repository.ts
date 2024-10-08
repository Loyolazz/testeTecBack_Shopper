import { Reading } from "@prisma/client";
import { ConfirmReadingDTO, CreateReadingDTO } from "../dtos/reading.dto";
import { Repository } from "./Repository";

export class ReadingRepository extends Repository {
    async create(readingData: CreateReadingDTO): Promise<Reading> {
        const reading = await this.db.reading.create({
            data: readingData as any,
        });

        return reading;
    }

    async update(readingData: ConfirmReadingDTO): Promise<void> {
        const reading = await this.db.reading.findUnique({
            where: {
                id: readingData.measure_uuid,
            },
        });

        if (!reading) throw new Error("404");
        if (reading.has_confirmed) throw new Error("409");

        await this.db.reading.update({
            data: {
                measure_value: readingData.confirmed_value,
                has_confirmed: true,
            },
            where: {
                id: readingData.measure_uuid,
            },
        });
    }
}

import { Reading } from "@prisma/client";
import { AtualizarAnelDTO, CriarAnelDTO } from "../dtos/reading.dto";
import { Repository } from "./Repository";

export class ReadingRepository extends Repository {
    async criar(anel: CreateReadingDTO): Promise<Reading> {
        const anel = await this.db.anel.create({
            data: { ...anel },
        });

        return reading;
    }

    async atualizar(anel: AtualizarAnelDTO): Promise<void> {
        const reading = await this.db.anel.findUnique({
            where: {
                id: anel.portadorId
            },
        });

        if (!reading) throw new Error("404");
        if (reading.has_confirmed) throw new Error("409");

        await this.db.reading.update({
            data: {
                measure_value: anel.confirmed_value,
                has_confirmed: true,
            },
            where: {
                id: anel.measure_uuid,
            },
        });
    }

    async deletar(anel) {
        
    }
}

import { prisma } from '../database/index';
import { CreateReadingDTO } from '../dtos/CreateReadingDTO';
import { ReadingEntity } from '../entities/ReadingEntity';

export class ReadingRepository {
    async create(data: CreateReadingDTO): Promise<ReadingEntity> {
        const reading = await prisma.reading.create({
            data: {
                customerCode: data.customer_code,
                value: data.value,
                measureType: data.measure_type,
            },
        });
        return new ReadingEntity(reading.id, reading.customerCode, reading.value, reading.createdAt, reading.updatedAt);
    }

    async confirmReading(measure_uuid: string, confirmed_value: number): Promise<void> {
        await prisma.reading.update({
            where: { id: measure_uuid },
            data: { value: confirmed_value, updatedAt: new Date() },
        });
    }

    async getReadingsByCustomer(customer_code: string, measure_type?: string) {
        return prisma.reading.findMany({
            where: {
                customerCode: customer_code,
                measureType: measure_type, // Inclua o campo measureType se for necessário
            },
        });
    }
}

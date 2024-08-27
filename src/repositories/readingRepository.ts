import { prisma } from '../database';
import { CreateReadingDTO } from '../dtos/createReadingDTO';
import { ReadingEntity } from '../entities/readingEntity';

export class ReadingRepository {
    async create(data: CreateReadingDTO): Promise<ReadingEntity> {
        const reading = await prisma.reading.create({
            data: {
                customerCode: data.customer_code,
                value: data.value,
                measureType: data.measure_type,
                measureUuid: data.measure_uuid,
                measureDatetime: data.measure_datetime,
            },
        });
        return new ReadingEntity(
            reading.id,
            reading.customerCode,
            reading.value,
            reading.measureType,
            reading.measureUuid,
            reading.measureDatetime,
            reading.createdAt,
            reading.updatedAt
        );
    }

    async confirmReading(measure_uuid: string, confirmed_value: number): Promise<void> {
        await prisma.reading.update({
            where: { measureUuid: measure_uuid },
            data: { value: confirmed_value, updatedAt: new Date() },
        });
    }

    async findReadingByMonth(customer_code: string, measure_type: string, month: number, year: number): Promise<ReadingEntity | null> {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        const reading = await prisma.reading.findFirst({
            where: {
                customerCode: customer_code,
                measureType: measure_type,
                measureDatetime: {
                    gte: startDate,
                    lt: endDate,
                },
            },
        });

        if (!reading) return null;

        return new ReadingEntity(
            reading.id,
            reading.customerCode,
            reading.value,
            reading.measureType,
            reading.measureUuid,
            reading.measureDatetime,
            reading.createdAt,
            reading.updatedAt
        );
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

import { ReadingRepository } from '../repositories/readingRepository';

export class ReadingService {
    static async confirmReading(measure_uuid: string, confirmed_value: number) {
        const readingRepository = new ReadingRepository();
        await readingRepository.confirmReading(measure_uuid, confirmed_value);
    }

    static async listReadings(customer_code: string, measure_type?: string) {
        const readingRepository = new ReadingRepository();
        return readingRepository.getReadingsByCustomer(customer_code, measure_type);
    }
}

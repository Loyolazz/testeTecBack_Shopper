import { Reading } from "../entities/reading.entity";
import { CreateCustomerDTO, GetAllReadings } from "../dtos/customer.dto";
import { CustomerRepository } from "../repositories/customer.repository";

export class CustomerService {
    private customerRepository = new CustomerRepository();

    async createCustomer(customerData: CreateCustomerDTO): Promise<void> {
        try {
            await this.customerRepository.create(customerData);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getAllReadings (data: GetAllReadings): Promise<Array<Reading>> {
        try {
            return await this.customerRepository.getAllReading(data);
        } catch (error) {
            throw new Error(String(error));
        }
    }
}

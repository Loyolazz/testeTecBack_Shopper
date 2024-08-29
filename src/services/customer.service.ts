import { CreateCustomerDTO } from "../dtos/customer.dto";
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
}

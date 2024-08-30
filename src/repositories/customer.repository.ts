import bcrypt from "bcrypt";
import { CreateCustomerDTO, GetAllReadings } from "../dtos/customer.dto";
import { Repository } from "./Repository";
import { Customer } from "../entities/customer.entity";
import { Reading } from "../entities/reading.entity";

export class CustomerRepository extends Repository {
    async create(customerData: CreateCustomerDTO): Promise<void> {
        const hashedPassword = await bcrypt.hash(customerData.password, 10);
        delete customerData.password;

        await this.db.customer.create({
            data: {
                ...customerData,
                password_hash: hashedPassword,
            },
        });
    }

    async findByEmail(email: string): Promise<Customer | null> {
        return await this.db.customer.findUnique({
            where: {
                email: email,
            },
        });
    }

    async getAllReading(data: GetAllReadings): Promise<Array<Reading>> {
        return (await this.db.customer.findUnique({
            where: {
                id: data.customer_id,
            },
            select: {
                Reading: {
                    where: {
                        measure_type: data.measure_type?.toLocaleUpperCase(),
                    }
                },
            },
        })).Reading as any;
    }
}

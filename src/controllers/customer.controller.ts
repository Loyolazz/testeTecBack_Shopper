import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { CreateCustomerDTO } from "../dtos/customer.dto";

const customerService = new CustomerService();

export const createCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: CreateCustomerDTO = req.body;
        await customerService.createCustomer(dto);
        res.status(201).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

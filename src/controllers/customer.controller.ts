import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { CreateCustomerDTO, GetAllReadings } from "../dtos/customer.dto";

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

export const getAllReadings = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customer_id } = req.body;
        const { measure_type } = req.query as any;

        const readings = await customerService.getAllReadings({ customer_id, measure_type });
        res.status(200).send({
            customer_code: customer_id,
            measures: readings,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao buscar leituras" });
    }
};

import { Router } from "express";
import { createCustomer } from "../controllers/customer.controller";

const router = Router();

router
    .route('/customer')
    .post(createCustomer)

export default router;
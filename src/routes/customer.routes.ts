import { Router } from "express";
import { createCustomer, getAllReadings } from "../controllers/customer.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router
    .route('/customer')
    .post(createCustomer)

router
    .route('/customer/list')
    .get(authMiddleware, getAllReadings)

export default router;
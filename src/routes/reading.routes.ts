import { Router } from "express";
import { confirmReading, createReading } from "../controllers/reading.controller";

const router = Router();

router
    .route('/upload')
    .post(createReading)

router
    .route('/confirm')
    .patch(confirmReading)

export default router;
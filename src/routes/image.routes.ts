import { Router } from "express";
import { getImage } from "../controllers/image.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router
    .route('/image/:id')
    .get(getImage)

export default router;
import { Router } from 'express';
import { ImageController } from '../controllers/imageController';

const router = Router();

router.post('/upload', ImageController.uploadImage);

export default router;

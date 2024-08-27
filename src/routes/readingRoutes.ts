import { Router } from 'express';
import { ReadingController } from '../controllers/readingController';

const router = Router();

router.patch('/confirm', ReadingController.confirmReading);
router.get('/:customer_code/list', ReadingController.listReadings);

export default router;

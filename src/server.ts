import express from 'express';
import imageRoutes from './routes/imageRoutes';
import readingRoutes from './routes/readingRoutes';
import { authMiddleware } from './middlewares/authMiddleware';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use(authMiddleware);
app.use('/images', imageRoutes);
app.use('/readings', readingRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

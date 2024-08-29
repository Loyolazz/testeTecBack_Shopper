import "dotenv/config";

import express from "express";
import authRoutes from "./routes/auth.routes";
import customerRoutes from "./routes/customer.routes";
import readingRoutes from "./routes/reading.routes";
import imageRoutes from "./routes/image.routes";

const app = express();
app.use(express.json());

// Rotas
app.use(authRoutes);
app.use(customerRoutes);
app.use(readingRoutes);
app.use(imageRoutes);
// app.use("/readings", readingRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import { Request, Response } from "express";
import { ImageService } from "../services/image.service";

const imageService = new ImageService();

export const getImage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        if (!id) throw new Error("Id da imagem não informadoo");

        const image = await imageService.getImage({ id });

        const bufferToBase64 = image.base64.toString("base64").split("base64")[1];
        const img = Buffer.from(bufferToBase64, "base64");

        res.writeHead(200, {
            "Content-Type": "image/jpeg",
            "Content-Length": img.length,
        });
        res.end(img);
        // res.status(200).type('image;jpeg').send(bufferToBase64);
        // res.set("Content-Type", "text/html");
        // res.send(Buffer.from(`<img src="data:image/jpeg;base64,${bufferToBase64}"/>`));
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar a imagem" });
    }
};

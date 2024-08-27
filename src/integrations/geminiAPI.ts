// src/integrations/GeminiAPI.ts

import axios from 'axios';

export class GeminiAPI {
    private static apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    private static baseUrl = 'https://ai.google.dev/gemini-api';

    /**
     * Método para analisar uma imagem e obter a medida de consumo.
     * @param imageBase64 A imagem em formato base64.
     * @returns Um objeto com a URL da imagem, o GUID, e o valor da medida.
     */

    static async analyzeImage(imageBase64: string) {
        try {
            const response = await axios.post(
                `${this.baseUrl}/vision/analyze`,
                { image: imageBase64 },
                {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Supondo que a resposta contenha os dados esperados
            const { imageUrl, measureValue, measureUuid } = response.data;
            return { imageUrl, measureValue, measureUuid };

        } catch (error) {
            console.error('Erro ao integrar com o Google Gemini:', error);
            throw new Error('Erro ao processar a imagem com o Google Gemini');
        }
    }
}

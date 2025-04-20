// filepath: d:\legal analyzer\smart-legal-assistant\backend\src\services\ocrService.ts
import axios from "axios";

export const OCRService = {
    extractTextFromImage: async (imagePath: string): Promise<string[]> => {
        try {
            const apiKey = process.env.OCR_API_KEY; // Ensure this is set in your .env file
            const apiUrl = process.env.OCR_API_URL;
            if (!apiUrl) {
                throw new Error("OCR_API_URL is not defined in the environment variables.");
            }

            const formData = new FormData();
            formData.append("file", imagePath);

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${apiKey}`,
                },
            });

            // Assuming the API returns an array of text for each page
            return response.data.texts; // Adjust based on the API's response structure
        } catch (error) {
            console.error("Error extracting text from image:", error);
            throw new Error("Failed to extract text from image.");
        }
    },
};
// filepath: d:\legal analyzer\smart-legal-assistant\backend\src\services\legalLookupService.ts
import axios from "axios";

export const fetchLegalInfo = async (query: string): Promise<string> => {
    try {
        const apiKey = process.env.LEGAL_LOOKUP_API_KEY; // Ensure this is set in your .env file
        const apiUrl = process.env.LEGAL_LOOKUP_API_URL; // Ensure this is set in your .env file

        const response = await axios.get(`${apiUrl}`, {
            params: { query },
            headers: { Authorization: `Bearer ${apiKey}` },
        });

        return response.data.result; // Adjust based on the API's response structure
    } catch (error) {
        console.error("Error fetching legal information:", error);
        throw new Error("Failed to fetch legal information.");
    }

};

// Your implementation of the legal lookup service
export class LegalLookupService {
    static async fetchLegalInfo(query: string): Promise<string> {
      // Implementation here
      return "Legal information for query: " + query;
    }
  }
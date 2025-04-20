import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to upload a file
export const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading file: ' + error.message);
    }
};

// Function to send a chat message
export const sendMessage = async (message: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chat`, { message });
        return response.data;
    } catch (error) {
        throw new Error('Error sending message: ' + error.message);
    }
};

// Function to retrieve legal information
export const getLegalInfo = async (query: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/legal-info`, {
            params: { query },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error retrieving legal information: ' + error.message);
    }
};
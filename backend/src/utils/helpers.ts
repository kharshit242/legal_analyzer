export const formatApiResponse = (data: any, message: string = 'Success') => {
    return {
        status: 'success',
        message,
        data,
    };
};

export const formatErrorResponse = (error: any, message: string = 'An error occurred') => {
    return {
        status: 'error',
        message,
        error: error instanceof Error ? error.message : error,
    };
};

export const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
};
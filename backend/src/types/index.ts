export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface LegalDocument {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserQuery {
    userId: string;
    query: string;
    timestamp: Date;
}

export interface DocumentUploadRequest {
    userId: string;
    document: File;
}

export interface DocumentUploadResponse {
    success: boolean;
    documentId?: string;
    error?: string;
}

export interface ChatMessage {
    userId: string;
    message: string;
    timestamp: Date;
}

export interface ChatResponse {
    messages: ChatMessage[];
    response: string;
}
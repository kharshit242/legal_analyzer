import { Router } from 'express';
import { handleOCR, handleDocumentParsing, handleSummarization, handleLetterGeneration } from '../services/langchainService';

const router = Router();

// Define API endpoints
router.post('/ocr', handleOCR);
router.post('/parse', handleDocumentParsing);
router.post('/summarize', handleSummarization);
router.post('/generate-letter', handleLetterGeneration);

export default router;
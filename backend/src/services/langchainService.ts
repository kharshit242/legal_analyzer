import { OpenAI } from "langchain/llms/openai";
import { Document } from "langchain/document";
import { LangChain } from "langchain/core";
import { OCRService } from "./ocrService"; // Assuming there's an OCR service
import { LegalLookupService } from "./legalLookupService"; // Assuming there's a legal lookup service

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const processMultimodalInput = async (input: string) => {
  const documents = await OCRService.extractTextFromImage(input);
  const processedDocs = documents.map(doc => new Document({ text: doc }));

  const response = await LangChain.invoke({
    input: processedDocs,
    model: openai,
  });

  return response;
};

export const generateLegalLetter = async (template: string, details: object) => {
  const response = await LangChain.invoke({
    input: { template, details },
    model: openai,
  });

  return response;
};

export const lookupLegalInformation = async (query: string) => {
  const legalInfo = await LegalLookupService.fetchLegalInfo(query);
  return legalInfo;
};
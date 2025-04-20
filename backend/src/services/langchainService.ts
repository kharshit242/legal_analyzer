import { OpenAI } from "langchain/llms/openai";
import { Document } from "langchain/document";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { OCRService } from "./ocrService"; // Your custom OCR service
import { LegalLookupService } from "./legalLookupService"; // Your custom legal lookup service

// Initialize the OpenAI LLM
const openai = new OpenAI({
  configuration: {
    apiKey: process.env.OPENAI_API_KEY,
  },
});

// Process multimodal input (e.g., image) to extract and summarize text
export const processMultimodalInput = async (imagePath: string) => {
  const documents = await OCRService.extractTextFromImage(imagePath);
  const processedDocs: Document[] = documents.map((docText: string) => new Document({ pageContent: docText }));

  // Combine all the extracted text
  const combinedText = processedDocs.map(doc => doc.pageContent).join("\n");

  // Create a prompt
  const prompt = new PromptTemplate({
    template: "Please summarize the following legal documents:\n\n{docs}",
    inputVariables: ["docs"],
  });

  // Create and run the chain
  const chain = new LLMChain({ llm: openai, prompt });
  const response = await chain.call({ docs: combinedText });

  return response;
};

// Generate a legal letter from a prompt template and details
export const generateLegalLetter = async (template: string, details: Record<string, string>) => {
  const prompt = new PromptTemplate({
    template,
    inputVariables: Object.keys(details),
  });

  const chain = new LLMChain({ llm: openai, prompt });
  const response = await chain.call(details);

  return response;
};

// Lookup legal information based on a query
export const lookupLegalInformation = async (query: string) => {
  const legalInfo = await LegalLookupService.fetchLegalInfo(query);
  return legalInfo;
};

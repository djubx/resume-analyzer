import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';

// Initialize the Azure OpenAI client
const openai = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}`,
  defaultQuery: { 'api-version': process.env.AZURE_OPENAI_API_VERSION },
  defaultHeaders: { 'api-key': process.env.AZURE_OPENAI_API_KEY },
});

// Helper function to create chat completions with the default model
export async function createChatCompletion(
  messages: ChatCompletionMessageParam[],
  jsonResponse: boolean = false
) {
  return openai.chat.completions.create({
    model: process.env.AZURE_OPENAI_DEPLOYMENT || "gpt-4o-mini",
    messages,
    response_format: jsonResponse ? { type: "json_object" } : undefined
  });
}

export default openai; 
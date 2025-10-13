import { ChatCompletionMessageParam } from 'openai/resources';

const WORKER_PROXY_URL = process.env.WORKER_PROXY_URL || 'https://azure-openai-proxy.ball-breaker.workers.dev/api/chat';
const WORKER_API_KEY = process.env.WORKER_API_KEY || '';

// Helper function to create chat completions via Cloudflare Worker proxy
export async function createChatCompletion(
  messages: ChatCompletionMessageParam[],
  jsonResponse: boolean = false
) {
  const response = await fetch(WORKER_PROXY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-worker': WORKER_API_KEY,
    },
    body: JSON.stringify({
      messages,
      response_format: jsonResponse ? { type: "json_object" } : undefined,
    }),
  });

  if (!response.ok) {
    throw new Error(`Worker proxy error: ${response.status}`);
  }

  return await response.json();
}

export default {
  chat: {
    completions: {
      create: createChatCompletion
    }
  }
}; 
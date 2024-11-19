import { OpenAICompatibleChatSettings } from '@ai-sdk/openai-compatible';

// https://docs.together.ai/docs/serverless-models#chat-models
export type TogetherAIChatModelId =
  | 'databricks/dbrx-instruct'
  | 'deepseek-ai/deepseek-llm-67b-chat'
  | 'google/gemma-2-27b-it'
  | 'google/gemma-2-9b-it'
  | 'google/gemma-2b-it'
  | 'Gryphe/MythoMax-L2-13b'
  | 'meta-llama/Llama-2-13b-chat-hf'
  | 'meta-llama/Llama-3-70b-chat-hf'
  | 'meta-llama/Llama-3-8b-chat-hf'
  | 'meta-llama/Llama-3.2-3B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3-70B-Instruct-Lite'
  | 'meta-llama/Meta-Llama-3-70B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3-8B-Instruct-Lite'
  | 'meta-llama/Meta-Llama-3-8B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'
  | 'microsoft/WizardLM-2-8x22B'
  | 'mistralai/Mistral-7B-Instruct-v0.1'
  | 'mistralai/Mistral-7B-Instruct-v0.2'
  | 'mistralai/Mistral-7B-Instruct-v0.3'
  | 'mistralai/Mixtral-8x22B-Instruct-v0.1'
  | 'mistralai/Mixtral-8x7B-Instruct-v0.1'
  | 'NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO'
  | 'nvidia/Llama-3.1-Nemotron-70B-Instruct-HF'
  | 'Qwen/Qwen2-72B-Instruct'
  | 'Qwen/Qwen2.5-72B-Instruct-Turbo'
  | 'Qwen/Qwen2.5-7B-Instruct-Turbo'
  | 'Qwen/Qwen2.5-Coder-32B-Instruct'
  | 'togethercomputer/StripedHyena-Nous-7B'
  | 'upstage/SOLAR-10.7B-Instruct-v1.0'
  | (string & {});

export interface TogetherAIChatSettings extends OpenAICompatibleChatSettings {}

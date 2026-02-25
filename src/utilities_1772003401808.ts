import Anthropic from "@anthropic-ai/sdk";

class Utilities {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic();
  }

  async generateText(prompt: string, maxTokens: number = 1024): Promise<string> {
    try {
      if (!prompt || prompt.trim().length === 0) {
        throw new Error("Prompt cannot be empty");
      }

      if (maxTokens < 1 || maxTokens > 4096) {
        throw new Error("maxTokens must be between 1 and 4096");
      }

      const message = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: maxTokens,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const textContent = message.content.find((block) => block.type === "text");
      if (!textContent || textContent.type !== "text") {
        throw new Error("No text content in response");
      }

      return textContent.text;
    } catch (error) {
      if (error instanceof Anthropic.APIError) {
        throw new Error(`API Error: ${error.message} (Status: ${error.status})`);
      }
      throw error;
    }
  }

  async analyzeText(text: string): Promise<{
    wordCount: number;
    characterCount: number;
    sentenceCount: number;
    averageWordLength: number;
  }> {
    try {
      if (!text || text.trim().length === 0) {
        throw new Error("Text cannot be empty");
      }

      const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
      const characterCount = text.length;
      const sentenceCount = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
      const averageWordLength = characterCount / wordCount || 0;

      return {
        wordCount,
        characterCount,
        sentenceCount,
        averageWordLength: Math.round(averageWordLength * 100) / 100,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Text analysis error: ${error.message}`);
      }
      throw error;
    }
  }

  async translateText(text: string, targetLanguage: string): Promise<string> {
    try {
      if (!text || text.trim().length === 0) {
        throw new Error("Text to translate cannot be empty");
      }

      if (!targetLanguage || targetLanguage.trim().length === 0) {
        throw new Error("Target language cannot be
import Anthropic from "@anthropic-ai/sdk";

interface TextBlock {
  type: "text";
  text: string;
}

interface ContentBlock {
  type: string;
  text?: string;
}

class DataStructureHelper {
  private client: Anthropic;
  private conversationHistory: Anthropic.MessageParam[] = [];

  constructor() {
    this.client = new Anthropic();
  }

  async explainDataStructure(structureName: string): Promise<string> {
    const userMessage = `Explain the ${structureName} data structure. Include:
1. What it is and its purpose
2. Common operations and their time complexity
3. When to use it
4. Example use cases
Keep the explanation concise but comprehensive.`;

    this.conversationHistory.push({
      role: "user",
      content: userMessage,
    });

    try {
      const response = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system:
          "You are an expert in computer science and data structures. Provide clear, accurate, and helpful explanations.",
        messages: this.conversationHistory,
      });

      const assistantMessage = (response.content[0] as TextBlock).text;
      this.conversationHistory.push({
        role: "assistant",
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      throw new Error(
        `Failed to explain data structure: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  async compareDataStructures(
    structure1: string,
    structure2: string
  ): Promise<string> {
    const userMessage = `Compare and contrast ${structure1} and ${structure2} data structures:
1. Similarities
2. Differences
3. When to choose one over the other
4. Time and space complexity comparison`;

    this.conversationHistory.push({
      role: "user",
      content: userMessage,
    });

    try {
      const response = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system:
          "You are an expert in computer science and data structures. Provide clear, accurate, and helpful explanations.",
        messages: this.conversationHistory,
      });

      const assistantMessage = (response.content[0] as TextBlock).text;
      this.conversationHistory.push({
        role: "assistant",
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      throw new Error(
        `Failed to compare data structures: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  async suggestDataStructure(problem: string): Promise<string> {
    const userMessage = `I need help choosing a data structure for the following problem: ${problem}
Please suggest the best data structure and explain why it's suitable for this problem.`;

    this.conversationHistory.push({
      role: "user",
      content: userMessage,
    });

    try {
      const response = await this.client
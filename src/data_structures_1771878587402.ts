import Anthropic from "@anthropic-ai/sdk";
import * as readline from "readline";

interface Message {
  role: "user" | "assistant";
  content: string;
}

class DataStructureHelper {
  private client: Anthropic;
  private conversationHistory: Message[] = [];
  private rl: readline.Interface;

  constructor() {
    this.client = new Anthropic();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async chat(userMessage: string): Promise<string> {
    try {
      this.conversationHistory.push({
        role: "user",
        content: userMessage,
      });

      const response = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8096,
        system: `You are an expert in data structures and algorithms. Help users understand and implement various data structures like arrays, linked lists, stacks, queues, trees, graphs, hash tables, and heaps. Provide clear explanations, code examples when appropriate, and discuss time and space complexity. Focus on TypeScript implementations when code is requested.`,
        messages: this.conversationHistory,
      });

      const assistantMessage =
        response.content[0].type === "text" ? response.content[0].text : "";

      this.conversationHistory.push({
        role: "assistant",
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      if (error instanceof Anthropic.APIError) {
        throw new Error(`API Error: ${error.message}`);
      }
      throw error;
    }
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }

  getConversationHistory(): Message[] {
    return [...this.conversationHistory];
  }

  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  async startInteractiveSession(): Promise<void> {
    console.log(
      "Data Structure Helper - Interactive Chat\nType 'exit' to quit, 'clear' to clear history, 'history' to see conversation history\n"
    );

    while (true) {
      const userInput = await this.prompt("You: ");

      if (userInput.toLowerCase() === "exit") {
        console.log("Goodbye!");
        this.rl.close();
        break;
      }

      if (userInput.toLowerCase() === "clear") {
        this.clearHistory();
        console.log("Conversation history cleared.\n");
        continue;
      }

      if (userInput.toLowerCase() === "history") {
        console.log("\nConversation History:");
        this.conversationHistory.forEach((msg, index) => {
          console.log(`${index + 1}. ${msg.role.toUpperCase()}: ${msg.content.substring(0, 100)}...`);
        });
        console.log();
        continue;
      }

      if (!userInput.trim()) {
        continue;
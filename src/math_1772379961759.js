import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

class MathHelper {
  constructor() {
    this.conversationHistory = [];
  }

  async solve(problem) {
    if (!problem || typeof problem !== "string") {
      throw new Error("Problem must be a non-empty string");
    }

    this.conversationHistory.push({
      role: "user",
      content: problem,
    });

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system:
        "You are a helpful math tutor. Solve math problems step by step and explain your reasoning clearly.",
      messages: this.conversationHistory,
    });

    const assistantMessage = response.content[0].text;
    this.conversationHistory.push({
      role: "assistant",
      content: assistantMessage,
    });

    return assistantMessage;
  }

  async clarify(question) {
    if (!question || typeof question !== "string") {
      throw new Error("Question must be a non-empty string");
    }

    if (this.conversationHistory.length === 0) {
      throw new Error("No conversation history. Please solve a problem first.");
    }

    this.conversationHistory.push({
      role: "user",
      content: question,
    });

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system:
        "You are a helpful math tutor. Answer follow-up questions about the previous problem clearly.",
      messages: this.conversationHistory,
    });

    const assistantMessage = response.content[0].text;
    this.conversationHistory.push({
      role: "assistant",
      content: assistantMessage,
    });

    return assistantMessage;
  }

  clearHistory() {
    this.conversationHistory = [];
  }

  getHistory() {
    return this.conversationHistory;
  }
}

async function main() {
  const mathHelper = new MathHelper();

  console.log("MathHelper Demo\n");
  console.log("===============\n");

  try {
    console.log("Problem 1: Solving a quadratic equation");
    console.log("----------------------------------------");
    const solution1 = await mathHelper.solve(
      "Solve the quadratic equation: x^2 - 5x + 6 = 0"
    );
    console.log("Solution:\n", solution1);
    console.log();

    console.log("Asking for clarification:");
    console.log("------------------------");
    const clarification = await mathHelper.clarify(
      "Can you explain how you factored the equation?"
    );
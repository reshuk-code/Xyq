import Anthropic from "@anthropic-ai/sdk";

interface DataStructureExplanation {
  name: string;
  description: string;
  timeComplexity: {
    access: string;
    search: string;
    insertion: string;
    deletion: string;
  };
  spaceComplexity: string;
  useCase: string;
  example: string;
}

interface ComparisonResult {
  dataStructures: string[];
  comparison: string;
  recommendation: string;
}

class DataStructureHelper {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic();
  }

  async explainDataStructure(
    name: string
  ): Promise<DataStructureExplanation> {
    try {
      const message = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `Explain the data structure "${name}" in a structured JSON format with the following fields:
            - name: The name of the data structure
            - description: A brief description
            - timeComplexity: An object with access, search, insertion, deletion times
            - spaceComplexity: The space complexity
            - useCase: Common use cases
            - example: A code example (TypeScript or pseudocode)
            
            Return only valid JSON, no markdown or additional text.`,
          },
        ],
      });

      const content = message.content[0];
      if (content.type !== "text") {
        throw new Error("Unexpected response type from API");
      }

      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("Could not parse JSON response from API");
      }

      const explanation: DataStructureExplanation = JSON.parse(jsonMatch[0]);
      return explanation;
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error(`Failed to parse API response: ${error.message}`);
      }
      if (error instanceof Anthropic.APIError) {
        throw new Error(`API Error: ${error.message}`);
      }
      throw error;
    }
  }

  async compareDataStructures(
    structures: string[]
  ): Promise<ComparisonResult> {
    try {
      const structureList = structures.join(", ");
      const message = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `Compare the following data structures: ${structureList}
            
            Provide a response in JSON format with:
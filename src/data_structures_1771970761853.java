import com.anthropic.client.Anthropic;
import com.anthropic.client.extensions.BetaMessageCreateParamsNonStreaming;
import com.anthropic.client.extensions.BetaContentBlockParam;
import com.anthropic.client.extensions.BetaTextBlockParam;
import com.anthropic.client.extensions.BetaSystemPrompt;
import com.anthropic.models.BetaMessage;

public class DataStructuresHelper {
    private static final String SYSTEM_PROMPT = """
            You are an expert in data structures and algorithms. 
            Help users understand, implement, and optimize data structures.
            Provide clear explanations with code examples when needed.
            Focus on time and space complexity analysis.
            """;

    private final Anthropic client;
    private static final int MAX_TOKENS = 1024;

    public DataStructuresHelper() throws Exception {
        try {
            this.client = new Anthropic();
        } catch (Exception e) {
            throw new Exception("Failed to initialize Anthropic client", e);
        }
    }

    public String explainDataStructure(String structureName) throws Exception {
        if (structureName == null || structureName.trim().isEmpty()) {
            throw new IllegalArgumentException("Data structure name cannot be null or empty");
        }

        String query = String.format("""
                Explain the following data structure:
                Name: %s
                
                Please provide:
                1. Definition and purpose
                2. Common operations and their complexities
                3. Advantages and disadvantages
                4. Real-world use cases
                5. A simple implementation example
                """, structureName.trim());

        return queryAnthropic(query);
    }

    public String compareDataStructures(String structure1, String structure2) throws Exception {
        if (structure1 == null || structure1.trim().isEmpty() ||
                structure2 == null || structure2.trim().isEmpty()) {
            throw new IllegalArgumentException("Both data structure names must be provided and non-empty");
        }

        String query = String.format("""
                Compare these two data structures:
                1. %s
                2. %s
                
                Please provide:
                1. Key similarities
                2. Key differences
                3. When to use each one
                4. Performance comparison for common operations
                5. Example scenarios for each
                """, structure1.trim(), structure2.trim());

        return queryAnthropic(query);
    }

    public String suggestDataStructure(String problem) throws Exception {
        if (problem == null || problem.trim().isEmpty()) {
            throw new IllegalArgumentException("Problem description cannot be null or empty");
        }

        String query = String.format("""
                What data structure(s) would you recommend for this problem?
                Problem: %s
                
                Please suggest:
                1. The most appropriate data structure
                2.
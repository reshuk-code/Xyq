import com.anthropic.client.Anthropic;
import com.anthropic.client.extensions.BetaContentBlockParam;
import com.anthropic.client.extensions.BetaTextBlockParam;
import com.anthropic.models.BetaContentBlockParam.BetaTextBlockParam;
import com.anthropic.models.BetaMessage;
import com.anthropic.models.BetaMessageParam;
import java.util.*;

public class DataStructuresHelper {
    private final Anthropic client;
    private static final String MODEL = "claude-3-5-sonnet-20241022";

    public DataStructuresHelper() {
        this.client = new Anthropic();
    }

    /**
     * Explains a data structure and provides implementation details
     */
    public String explainDataStructure(String dataStructureName) throws Exception {
        try {
            List<BetaMessageParam> messages = new ArrayList<>();
            messages.add(
                    BetaMessageParam.builder()
                            .role("user")
                            .content("Explain the " + dataStructureName + " data structure. Include: 1) Definition, "
                                    + "2) Time complexities for main operations, 3) Use cases, 4) A simple Java implementation example. "
                                    + "Keep the explanation concise but comprehensive.")
                            .build());

            BetaMessage response = client.beta().messages().create(
                    com.anthropic.models.BetaMessageCreateParams.builder()
                            .model(MODEL)
                            .maxTokens(1024)
                            .messages(messages)
                            .build());

            if (response.content() != null && !response.content().isEmpty()) {
                return response.content().get(0).asText().text();
            } else {
                throw new Exception("No response received from API");
            }
        } catch (Exception e) {
            throw new Exception("Error explaining data structure: " + e.getMessage(), e);
        }
    }

    /**
     * Compares two data structures
     */
    public String compareDataStructures(String structure1, String structure2) throws Exception {
        try {
            List<BetaMessageParam> messages = new ArrayList<>();
            messages.add(
                    BetaMessageParam.builder()
                            .role("user")
                            .content("Compare " + structure1 + " and " + structure2 + " data structures. "
                                    + "Include: 1) Key differences, 2) Time complexity comparison, 3) Space complexity comparison, "
                                    + "4) When to use each one. Format as a clear comparison.")
                            .build());

            BetaMessage response = client.beta().messages().create(
                    com.anthropic.models.BetaMessageCreateParams.builder()
                            .model(MODEL)
                            .maxTokens
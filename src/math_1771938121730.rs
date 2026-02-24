use anthropic::Anthropic;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize the Anthropic client using the ANTHROPIC_API_KEY environment variable
    let client = Anthropic::new();

    // Define a mathematical algorithm that finds the greatest common divisor (GCD)
    // using Euclid's algorithm with inline comments explaining each step
    let algorithm_prompt = r#"
Please provide a Rust implementation of Euclid's algorithm for finding the Greatest Common Divisor (GCD).
Include inline comments explaining:
1. What the algorithm does at each step
2. How the mathematical logic works
3. The time complexity
4. Example usage

Format the response as a complete, runnable Rust code snippet.
"#;

    // Create a message request to Claude asking for the mathematical algorithm implementation
    let response = client
        .messages()
        .create(
            anthropic::messages::MessageCreateParams {
                model: "claude-3-5-sonnet-20241022".to_string(),
                max_tokens: 1024,
                messages: vec![anthropic::messages::MessageParam::User(
                    anthropic::messages::UserMessage {
                        content: anthropic::messages::UserMessageContent::Text(
                            algorithm_prompt.to_string(),
                        ),
                    },
                )],
                ..Default::default()
            },
        )
        .await?;

    // Extract and print the response containing the mathematical algorithm
    println!("Mathematical Algorithm Implementation:\n");
    println!("=====================================\n");

    // Iterate through the response content blocks and print any text content
    for content in response.content {
        match content {
            anthropic::messages::ContentBlock::Text(text_block) => {
                println!("{}\n", text_block.text);
            }
            _ => {}
        }
    }

    // Now let's implement and demonstrate a simple mathematical algorithm directly
    println!("\n=====================================");
    println!("Direct Implementation Example:");
    println!("=====================================\n");

    // This is a direct implementation of Euclid's algorithm with detailed comments
    demonstrate_math_algorithm();

    Ok(())
}

// Function that demonstrates a mathematical algorithm with inline comments
fn demonstrate_math_algorithm() {
    println!("// Euclid's Algorithm for Greatest Common Divisor (GCD)");
    println!("// This algorithm finds the largest number that divides both input numbers\n");

    // Define the GCD function with inline comments
    fn gcd(mut a: u32, mut b: u32) -> u32 {
        // Base case: if b is 0, then a is the GCD
        if b == 0 {
            return a;
        }

        // Euclidean algorithm: repeatedly replace the larger number with the remainder
        // when the larger is divided by the smaller
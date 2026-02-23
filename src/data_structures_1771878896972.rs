use anthropic_sdk::Anthropic;

#[tokio::main]
async fn main() {
    // Initialize the Anthropic client
    let client = Anthropic::new();

    // Create a message asking Claude to implement a data structure in Rust
    let message = client
        .messages
        .create(anthropic_sdk::messages::CreateMessageRequest {
            model: "claude-3-5-sonnet-20241022".to_string(),
            max_tokens: 2048,
            messages: vec![anthropic_sdk::messages::MessageParam::User(
                anthropic_sdk::messages::UserMessageParam {
                    content: anthropic_sdk::messages::ContentBlockParam::Text(
                        "Implement a Binary Search Tree (BST) data structure in Rust with the following methods:
1. insert(value: i32) - Insert a value into the BST
2. search(value: i32) -> bool - Search for a value in the BST
3. delete(value: i32) - Delete a value from the BST
4. inorder_traversal() -> Vec<i32> - Return values in sorted order

Include detailed comments explaining the logic. Make sure it's production-ready code with proper error handling.".to_string(),
                    ),
                },
            )],
            ..Default::default()
        })
        .await
        .expect("Failed to create message");

    // Extract and print the response
    if let Some(content) = message.content.first() {
        match content {
            anthropic_sdk::messages::ContentBlock::Text(text) => {
                println!("{}", text.text);
            }
            _ => println!("Unexpected content type"),
        }
    }
}
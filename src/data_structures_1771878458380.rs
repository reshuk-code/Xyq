use anthropic::types::MessageParam;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fmt;

#[derive(Debug, Clone)]
pub enum DataStructureError {
    EmptyStructure,
    IndexOutOfBounds,
    KeyNotFound(String),
    InvalidOperation(String),
    SerializationError(String),
}

impl fmt::Display for DataStructureError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            DataStructureError::EmptyStructure => write!(f, "Data structure is empty"),
            DataStructureError::IndexOutOfBounds => write!(f, "Index out of bounds"),
            DataStructureError::KeyNotFound(key) => write!(f, "Key not found: {}", key),
            DataStructureError::InvalidOperation(msg) => write!(f, "Invalid operation: {}", msg),
            DataStructureError::SerializationError(msg) => write!(f, "Serialization error: {}", msg),
        }
    }
}

impl std::error::Error for DataStructureError {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DataStructureInfo {
    pub name: String,
    pub data_type: String,
    pub size: usize,
    pub description: String,
}

pub struct DataStructureHelper {
    client: anthropic::Anthropic,
    conversation_history: Vec<MessageParam>,
}

impl DataStructureHelper {
    pub fn new() -> Self {
        let client = anthropic::Anthropic::new();
        Self {
            client,
            conversation_history: Vec::new(),
        }
    }

    pub async fn analyze_data_structure(
        &mut self,
        ds_info: &DataStructureInfo,
    ) -> Result<String, Box<dyn std::error::Error>> {
        let user_message = format!(
            "Please analyze this data structure:\nName: {}\nType: {}\nSize: {}\nDescription: {}",
            ds_info.name, ds_info.data_type, ds_info.size, ds_info.description
        );

        self.conversation_history.push(MessageParam::User {
            content: user_message.into(),
        });

        let response = self
            .client
            .messages()
            .create(anthropic::types::MessageCreateParamsNonStreaming {
                model: "claude-3-5-sonnet-20241022".to_string(),
                max_tokens: 1024,
                messages: self.conversation_history.clone(),
                system: Some("You are an expert in data structures. Provide concise and technical analysis.".into()),
                ..Default::default()
            })
            .await?;

        let assistant_message = match response.content.first() {
            Some(anthropic::types::ContentBlock::Text(text_block)) => text_block.text.clone(),
            _ => return Err("Unexpected response format".into()),
        };

        self.conversation_history.push(MessageParam::Assistant {
            content: assistant_message.clone().into(),
        });

        Ok(assistant_message)
    }

    pub async fn compare_
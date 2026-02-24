import anthropic
import json


class DataStructuresHelper:
    """Helper class for learning and understanding data structures using Claude API."""
    
    def __init__(self):
        """Initialize the DataStructuresHelper with Anthropic client."""
        self.client = anthropic.Anthropic()
        self.model = "claude-3-5-sonnet-20241022"
    
    def explain_data_structure(self, structure_name: str) -> str:
        """
        Explain a data structure in detail.
        
        Args:
            structure_name: The name of the data structure to explain
            
        Returns:
            A detailed explanation of the data structure
            
        Raises:
            ValueError: If structure_name is empty
            anthropic.APIError: If API call fails
        """
        if not structure_name or not structure_name.strip():
            raise ValueError("Structure name cannot be empty")
        
        try:
            message = self.client.messages.create(
                model=self.model,
                max_tokens=1024,
                messages=[
                    {
                        "role": "user",
                        "content": f"Explain the data structure '{structure_name}' in detail. Include: definition, use cases, time complexity for basic operations, and advantages/disadvantages."
                    }
                ]
            )
            return message.content[0].text
        except anthropic.APIError as e:
            raise anthropic.APIError(f"Failed to explain data structure: {str(e)}")
    
    def provide_example_code(self, structure_name: str, language: str = "Python") -> str:
        """
        Provide example code for implementing a data structure.
        
        Args:
            structure_name: The name of the data structure
            language: Programming language for the example (default: Python)
            
        Returns:
            Example code implementing the data structure
            
        Raises:
            ValueError: If inputs are invalid
            anthropic.APIError: If API call fails
        """
        if not structure_name or not structure_name.strip():
            raise ValueError("Structure name cannot be empty")
        if not language or not language.strip():
            raise ValueError("Language cannot be empty")
        
        try:
            message = self.client.messages.create(
                model=self.model,
                max_tokens=2048,
                messages=[
                    {
                        "role": "user",
                        "content": f"Provide a complete implementation example of a {structure_name} data structure in {language}. Include basic operations like insert, delete, and search with clear comments."
                    }
                ]
            )
            return message.content[0].text
        except anthropic.APIError as e:
            raise anthropic.APIError(f"Failed to generate example code: {str(e)}")
    
    def compare_data_structures(self, structures: list[str])
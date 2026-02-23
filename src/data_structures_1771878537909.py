import anthropic
import json
from typing import Any


class DataStructureHelper:
    """Helper class for data structure operations powered by Claude AI."""

    def __init__(self):
        """Initialize the DataStructureHelper with Anthropic client."""
        self.client = anthropic.Anthropic()
        self.model = "claude-3-5-sonnet-20241022"

    def analyze_structure(self, data: Any) -> dict[str, Any]:
        """
        Analyze a data structure and provide insights.

        Args:
            data: The data structure to analyze

        Returns:
            Dictionary containing analysis results

        Raises:
            ValueError: If data cannot be serialized to JSON
            anthropic.APIError: If API call fails
        """
        try:
            data_str = json.dumps(data, default=str)
        except (TypeError, ValueError) as e:
            raise ValueError(f"Cannot serialize data to JSON: {e}") from e

        message = self.client.messages.create(
            model=self.model,
            max_tokens=1024,
            messages=[
                {
                    "role": "user",
                    "content": f"Analyze this data structure and provide insights about its type, complexity, and optimization opportunities:\n\n{data_str}",
                }
            ],
        )

        return {
            "analysis": message.content[0].text,
            "data_preview": str(data)[:200],
        }

    def suggest_operations(self, structure_type: str, use_case: str) -> dict[str, Any]:
        """
        Suggest optimal operations for a given data structure type.

        Args:
            structure_type: Type of data structure (e.g., 'list', 'dict', 'tree')
            use_case: The intended use case for the structure

        Returns:
            Dictionary containing suggested operations

        Raises:
            anthropic.APIError: If API call fails
        """
        if not structure_type or not use_case:
            raise ValueError("Both structure_type and use_case must be non-empty")

        message = self.client.messages.create(
            model=self.model,
            max_tokens=1024,
            messages=[
                {
                    "role": "user",
                    "content": f"Suggest the best operations and algorithms for a {structure_type} data structure used for: {use_case}. Include time and space complexity analysis.",
                }
            ],
        )

        return {
            "suggestions": message.content[0].text,
            "structure_type": structure_type,
            "use_case": use_case,
        }

    def optimize_structure(self, data: Any, optimization_goal: str) -> dict[str, Any]:
        """
        Suggest optimizations for a data structure.

        Args:
            data: The data structure to optimize
            optimization_goal: What aspect to optimize (e.g., 'speed', 'memory', 'balance')

        Returns:
            Dictionary containing optimization suggestions

        Raises:
            ValueError: If data cannot be serialized or inputs are invalid
            anthropic.APIError: If API call fails
        """
        if not optimization_goal:
            raise ValueError("optimization_goal must be non-empty")

        try:
            data_str = json.dumps
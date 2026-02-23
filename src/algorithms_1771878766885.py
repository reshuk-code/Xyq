import anthropic
from typing import Optional


class AlgorithmHelper:
    """
    A helper class for getting algorithm explanations and solutions using Claude API.
    Provides methods to understand, solve, and analyze various algorithms.
    """

    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize the AlgorithmHelper with Claude client.

        Args:
            api_key: Optional API key for Claude. If not provided, uses ANTHROPIC_API_KEY env var.

        Raises:
            ValueError: If no API key is provided and ANTHROPIC_API_KEY env var is not set.
        """
        if api_key:
            self.client = anthropic.Anthropic(api_key=api_key)
        else:
            self.client = anthropic.Anthropic()

    def explain_algorithm(self, algorithm_name: str, level: str = "beginner") -> str:
        """
        Get a detailed explanation of an algorithm.

        Args:
            algorithm_name: Name of the algorithm to explain (e.g., "binary search", "quicksort")
            level: Complexity level of explanation - "beginner", "intermediate", or "advanced"

        Returns:
            A detailed explanation of the algorithm.

        Raises:
            ValueError: If level is not one of the valid options.
            anthropic.APIError: If there's an issue with the API call.
        """
        if level not in ["beginner", "intermediate", "advanced"]:
            raise ValueError("Level must be 'beginner', 'intermediate', or 'advanced'")

        prompt = f"""Explain the {algorithm_name} algorithm at a {level} level.
Include:
1. Basic concept
2. How it works (step by step)
3. Time and space complexity
4. Practical use cases
5. Example walkthrough if applicable"""

        message = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1024,
            messages=[{"role": "user", "content": prompt}],
        )

        return message.content[0].text

    def solve_algorithm_problem(
        self, problem_description: str, language: str = "python", with_explanation: bool = True
    ) -> str:
        """
        Get a solution to an algorithm problem.

        Args:
            problem_description: Description of the algorithm problem to solve
            language: Programming language for the solution (default: "python")
            with_explanation: Whether to include explanation of the solution

        Returns:
            Code solution with optional explanation.

        Raises:
            anthropic.APIError: If there's an issue with the API call.
        """
        explanation_request = "Please explain your solution approach." if with_explanation else ""

        prompt = f"""Solve the following algorithm problem in {language}:

{problem_description}

Provide:
1. A complete, working solution
2. Clear variable names and comments
{explanation_request}
3. Time and space complexity analysis"""

        message = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=2048,
            messages=[{"role": "user", "content": prompt}],
        )

        return message.content[0].text

    def compare_algorithms(self
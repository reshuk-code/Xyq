"""
Data Structures Utility Module

A utility module providing common data structure operations and implementations
using Claude AI for interactive assistance and explanations.
"""

import anthropic


def explain_data_structure(structure_name: str, complexity_details: bool = False) -> str:
    """
    Explain a data structure using Claude AI.
    
    Args:
        structure_name: The name of the data structure to explain (e.g., 'stack', 'queue', 'tree')
        complexity_details: If True, include time and space complexity analysis
    
    Returns:
        A detailed explanation of the data structure from Claude AI
    """
    client = anthropic.Anthropic()
    
    prompt = f"Explain the {structure_name} data structure in detail."
    if complexity_details:
        prompt += " Include time and space complexity for common operations."
    
    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    
    return message.content[0].text


def compare_data_structures(structures: list[str]) -> str:
    """
    Compare multiple data structures and their use cases using Claude AI.
    
    Args:
        structures: A list of data structure names to compare
    
    Returns:
        A comparison analysis of the specified data structures
    """
    client = anthropic.Anthropic()
    
    structures_str = ", ".join(structures)
    prompt = f"""Compare the following data structures: {structures_str}
    
    For each structure, discuss:
    1. When to use it
    2. Advantages and disadvantages
    3. Common operations and their complexities
    4. Real-world examples"""
    
    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=2048,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    
    return message.content[0].text


def implement_data_structure(structure_name: str, requirements: str = "") -> str:
    """
    Get implementation guidance for a data structure from Claude AI.
    
    Args:
        structure_name: The data structure to implement
        requirements: Any specific requirements or constraints
    
    Returns:
        Implementation guidance and code examples
    """
    client = anthropic.Anthropic()
    
    prompt = f"Provide a Python implementation guide for {structure_name}."
    if requirements:
        prompt += f" Requirements: {requirements}"
    prompt += "\nInclude clear explanations of key methods and operations."
    
    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=2048,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    
    return message.content[0].text


def get_algorithm_recommendation(problem_description: str) -> str:
    """
    Get a recommendation for the best data structure for a given problem.
    
    Args:
        problem_description: Description of the problem to solve
    
    Returns:
        Claude AI's recommendation for the best data structure an
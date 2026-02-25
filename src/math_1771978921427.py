import anthropic
import json

def math_algorithm():
    """
    This function demonstrates a Math algorithm using Claude AI with tool use.
    The algorithm solves mathematical problems by leveraging Claude's reasoning
    and calculation capabilities through a tool-use pattern.
    """
    
    # Initialize the Anthropic client
    client = anthropic.Anthropic()
    
    # Define the tools that Claude can use for mathematical operations
    tools = [
        {
            "name": "calculate",
            "description": "Performs mathematical calculations. Supports basic arithmetic, algebra, and mathematical functions.",
            "input_schema": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "A mathematical expression to evaluate (e.g., '2 + 2', 'sqrt(16)', 'sin(pi/2)')"
                    },
                    "operation": {
                        "type": "string",
                        "enum": ["arithmetic", "algebra", "trigonometry", "logarithm", "power"],
                        "description": "The type of mathematical operation being performed"
                    }
                },
                "required": ["expression", "operation"]
            }
        },
        {
            "name": "solve_equation",
            "description": "Solves mathematical equations for unknown variables",
            "input_schema": {
                "type": "object",
                "properties": {
                    "equation": {
                        "type": "string",
                        "description": "The equation to solve (e.g., '2x + 5 = 13')"
                    },
                    "variable": {
                        "type": "string",
                        "description": "The variable to solve for (e.g., 'x')"
                    }
                },
                "required": ["equation", "variable"]
            }
        }
    ]
    
    # Start the algorithm with a mathematical problem
    user_message = "I need to solve the following problem: What is the value of x if 3x + 7 = 22? Then calculate the square root of x."
    
    print(f"User Problem: {user_message}\n")
    print("=" * 60)
    
    # Initialize messages list for multi-turn conversation
    messages = [
        {"role": "user", "content": user_message}
    ]
    
    # Main algorithm loop - continues until Claude provides a final response
    iteration = 0
    max_iterations = 10  # Safety limit to prevent infinite loops
    
    while iteration < max_iterations:
        iteration += 1
        print(f"\nIteration {iteration}:")
        print("-" * 40)
        
        # Call Claude with tools
        response = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1024
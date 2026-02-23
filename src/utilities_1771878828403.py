"""
Utilities module providing helpful functions for common tasks.
This module offers various utility functions using only Python's standard library.
"""


def format_bytes(bytes_size: int) -> str:
    """
    Convert bytes to a human-readable format.
    
    Args:
        bytes_size: The number of bytes to convert.
        
    Returns:
        A string representation of the bytes in human-readable format (B, KB, MB, GB, TB).
        
    Example:
        >>> format_bytes(1024)
        '1.0 KB'
        >>> format_bytes(1048576)
        '1.0 MB'
    """
    # Define size units and their values
    units = ['B', 'KB', 'MB', 'GB', 'TB']
    size = float(bytes_size)
    unit_index = 0
    
    # Iterate through units until we find the appropriate one
    while size >= 1024 and unit_index < len(units) - 1:
        size /= 1024
        unit_index += 1
    
    # Format the result with appropriate decimal places
    if unit_index == 0:
        return f"{int(size)} {units[unit_index]}"
    else:
        return f"{size:.1f} {units[unit_index]}"


def reverse_string(text: str, preserve_case: bool = False) -> str:
    """
    Reverse a string with optional case preservation.
    
    Args:
        text: The string to reverse.
        preserve_case: If True, preserves the case pattern of the original string.
                      If False, simply reverses the string as-is.
        
    Returns:
        The reversed string, optionally with case pattern preserved.
        
    Example:
        >>> reverse_string("Hello World")
        'dlroW olleH'
        >>> reverse_string("HeLLo WoRLd", preserve_case=True)
        'DlRoW oLLeH'
    """
    reversed_text = text[::-1]
    
    if not preserve_case:
        return reversed_text
    
    # Preserve case pattern from original string
    result = []
    for i, char in enumerate(reversed_text):
        if i < len(text):
            # Check if original character at this position was uppercase
            if text[i].isupper():
                result.append(char.upper())
            else:
                result.append(char.lower())
        else:
            result.append(char)
    
    return ''.join(result)


def find_duplicates(items: list) -> dict:
    """
    Find duplicate items in a list and return their counts.
    
    Args:
        items: A list that may contain duplicate items.
        
    Returns:
        A dictionary where keys are items that appear more than once,
        and values are their occurrence counts.
        
    Example:
        >>> find_duplicates([1, 2, 2, 3, 3, 3, 4])
        {2: 2, 3: 3}
    """
    # Count occurrences of each item
    item_counts = {}
    for item in items:
        # Handle unhashable types by converting to string representation
        try:
            item_
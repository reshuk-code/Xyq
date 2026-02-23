"""
Data Structures Utility Module

This module provides utility functions for working with various data structures
including lists, dictionaries, and custom data structure operations.
"""


def flatten_nested_list(nested_list):
    """
    Flatten a nested list structure into a single-level list.
    
    This function recursively processes a nested list and returns a flattened
    version containing all individual elements from all nesting levels.
    
    Args:
        nested_list (list): A list that may contain nested lists at any depth.
    
    Returns:
        list: A single-level list containing all elements from the input.
    
    Examples:
        >>> flatten_nested_list([1, [2, 3], [[4, 5], 6]])
        [1, 2, 3, 4, 5, 6]
        
        >>> flatten_nested_list([['a'], ['b', ['c', 'd']]])
        ['a', 'b', 'c', 'd']
    """
    result = []
    
    # Iterate through each item in the input list
    for item in nested_list:
        # Check if the item is itself a list
        if isinstance(item, list):
            # Recursively flatten the nested list and extend results
            result.extend(flatten_nested_list(item))
        else:
            # Add non-list items directly to the result
            result.append(item)
    
    return result


def merge_dictionaries(*dicts):
    """
    Merge multiple dictionaries into a single dictionary.
    
    This function combines multiple dictionaries into one. When keys overlap,
    the value from the last dictionary in the argument list takes precedence.
    
    Args:
        *dicts: Variable number of dictionary objects to merge.
    
    Returns:
        dict: A new dictionary containing all key-value pairs from input dicts.
    
    Examples:
        >>> merge_dictionaries({'a': 1}, {'b': 2}, {'c': 3})
        {'a': 1, 'b': 2, 'c': 3}
        
        >>> merge_dictionaries({'x': 10, 'y': 20}, {'y': 30, 'z': 40})
        {'x': 10, 'y': 30, 'z': 40}
    """
    merged = {}
    
    # Iterate through each dictionary passed as argument
    for dictionary in dicts:
        # Validate that the argument is actually a dictionary
        if not isinstance(dictionary, dict):
            raise TypeError(f"Expected dict, got {type(dictionary).__name__}")
        
        # Update the merged dictionary with current dictionary's items
        merged.update(dictionary)
    
    return merged


def find_duplicates(items):
    """
    Find all duplicate elements in a list.
    
    This function identifies and returns all elements that appear more than
    once in the input list, preserving their original order of first appearance.
    
    Args:
        items (list): A list of hashable items to check for duplicates.
    
    Returns:
        list: A list of unique duplicate elements found in the input.
    
    Examples:
        >>> find_duplicates([1, 2, 2, 3, 3, 3, 4])
        [2, 3]
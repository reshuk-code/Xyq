"""
Utility module for common helper functions and operations.
This module provides a set of reusable utility functions for common tasks.
"""


def validate_email(email: str) -> bool:
    """
    Validate if a string is a valid email address format.
    
    Args:
        email (str): The email address to validate.
        
    Returns:
        bool: True if the email format is valid, False otherwise.
        
    Example:
        >>> validate_email("user@example.com")
        True
        >>> validate_email("invalid.email")
        False
    """
    if not isinstance(email, str):
        return False
    
    # Check for basic email format requirements
    if len(email) < 5 or len(email) > 254:
        return False
    
    # Check for exactly one @ symbol
    if email.count('@') != 1:
        return False
    
    local_part, domain_part = email.rsplit('@', 1)
    
    # Validate local part
    if not local_part or len(local_part) > 64:
        return False
    
    # Check for valid characters in local part
    valid_local_chars = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._%-+')
    if not all(c in valid_local_chars for c in local_part):
        return False
    
    # Validate domain part
    if not domain_part or len(domain_part) > 255:
        return False
    
    # Domain must contain at least one dot and valid characters
    if '.' not in domain_part:
        return False
    
    # Check for consecutive dots or dots at start/end
    if '..' in domain_part or domain_part.startswith('.') or domain_part.endswith('.'):
        return False
    
    valid_domain_chars = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-')
    if not all(c in valid_domain_chars for c in domain_part):
        return False
    
    return True


def format_bytes(bytes_size: int, precision: int = 2) -> str:
    """
    Convert bytes to human-readable format (KB, MB, GB, etc.).
    
    Args:
        bytes_size (int): The number of bytes to convert.
        precision (int): Number of decimal places to display (default: 2).
        
    Returns:
        str: Human-readable file size string.
        
    Example:
        >>> format_bytes(1024)
        '1.00 KB'
        >>> format_bytes(1048576)
        '1.00 MB'
        >>> format_bytes(512, precision=1)
        '512 Bytes'
    """
    # List of unit suffixes in order
    units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
    
    # Handle negative sizes
    if bytes_size < 0:
        return "Invalid size"
    
    # Return bytes if size is
/**
 * Utilities Module
 * 
 * A collection of utility functions for common operations including
 * string manipulation, type checking, and object operations.
 * No external dependencies required.
 */

/**
 * Checks if a value is of a specific type
 * @param value - The value to check
 * @param type - The type to check against ('string', 'number', 'boolean', 'object', 'array', 'function')
 * @returns True if the value matches the specified type, false otherwise
 */
function isType(value: unknown, type: string): boolean {
  if (type === 'array') {
    return Array.isArray(value);
  }
  return typeof value === type;
}

/**
 * Deeply clones an object or array
 * Handles nested objects, arrays, and primitive values
 * @param obj - The object or array to clone
 * @returns A deep copy of the input object
 */
function deepClone<T>(obj: T): T {
  // Handle primitive types and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const clonedArray: unknown[] = [];
    for (let i = 0; i < obj.length; i++) {
      clonedArray[i] = deepClone(obj[i]);
    }
    return clonedArray as T;
  }

  // Handle regular objects
  if (obj.constructor === Object) {
    const clonedObj: Record<string, unknown> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone((obj as Record<string, unknown>)[key]);
      }
    }
    return clonedObj as T;
  }

  // Return the object as-is for other types
  return obj;
}

/**
 * Converts a camelCase string to kebab-case
 * @param str - The string to convert
 * @returns The converted kebab-case string
 */
function camelToKebab(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

/**
 * Converts a kebab-case string to camelCase
 * @param str - The string to convert
 * @returns The converted camelCase string
 */
function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Deb
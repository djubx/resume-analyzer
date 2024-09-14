/**
 * Sanitizes a string by removing non-printable ASCII characters and invalid Unicode characters.
 * @param input The input string to sanitize
 * @returns The sanitized string
 */
export function sanitizeString(input: string): string {
  // Remove non-printable ASCII characters (except for newline and tab)
  let sanitized = input.replace(/[^\x20-\x7E\n\t]/g, '');
  
  // Remove invalid Unicode characters
  sanitized = sanitized.replace(/[\uFFFD\uFFFE\uFFFF]/g, '');
  
  // Replace Unicode control characters with spaces
  sanitized = sanitized.replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ');

  return sanitized;
}

/**
 * Recursively sanitizes an object by applying sanitizeString to all string properties.
 * @param obj The object to sanitize
 * @returns The sanitized object
 */
export function sanitizeObject(obj: any): any {
  if (typeof obj === 'string') {
    return sanitizeString(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(sanitizeObject);
  } else if (typeof obj === 'object' && obj !== null) {
    const sanitizedObj: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitizedObj[key] = sanitizeObject(value);
    }
    return sanitizedObj;
  }
  return obj;
}
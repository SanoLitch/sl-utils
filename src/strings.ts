import { IsNull } from "./common";

/**
 * Checks value for string type
 * @param value - value for checking
 * @return boolean - checking result
 */
export function IsString(value: any): boolean {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Casts object to json-string, removes '\n' symbol
 * @param value - original value
 * @return string - parsed string
 */
export function Strignify(value: any): string {
  return JSON.stringify(value).replace('\n', '')
}

/**
 * Checking for one string contains another, useful for switch-case operator
 * @param val - original string for search
 * @param pattern - value that should be found
 * @return string | null - found value or null
 */
export function StringContains(val: string, pattern: string): string | null {
  if (val.includes(pattern)) {
    return pattern;
  }
  return null;
}

/**
 * Checking for null, undefined or empty string value
 * @param str - original value for checking
 * @return boolean - check result
 */
export function IsEmptyStr(str: string): boolean {
  return IsNull(str) || str.trim() === '';
}

/**
 * Replaces empty string value with another value, in other cases return original value
 * @param str - value for checking
 * @param replaceValue - value for replace
 * @return any - original or replaced value
 */
export function ReplaceEmptyStr(str: string, replaceValue: any = ''): any {
  return IsEmptyStr(str) ? replaceValue : str;
}

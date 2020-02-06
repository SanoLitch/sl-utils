import { IsString } from "./strings";

/**
 * Checking value for null or undefined
 * Warning! Works weird with some types
 * @param val - value for checking
 * @param searchNullInString - useful if value is string equals 'null' or 'undefined',
 *                             for example after sending null to node server
 * @return boolean - check result
 */
export function IsNull(val: any, searchNullInString: boolean = false): boolean {
  if (searchNullInString && IsString(val)) {
    return val.toLowerCase() === 'null' || val.toLowerCase() === 'undefined' || IsNull(val);
  }
  return val === null || val === undefined;
}

/**
 * Replace detected null or undefined value with another, in other cases return original value
 * @param val - value for check
 * @param replaceValue - value for replace
 * @return any - original or replaced value
 */
export function ReplaceNull(val: any, replaceValue: any): any {
  if (IsNull(val)) {
    return replaceValue;
  }
  return val;
}

/**
 * try-catch-wrapper for JSON.parse() function, if function was executed successful return parsed json-object
 * in other cases return original value
 * @param value - value for parsing
 * @return any - original or parsed json-object value
 */
export function TryParseObject(value: any): any {
  try {
    const obj = JSON.parse(value);

    return obj;
  } catch (e) {
    return value;
  }
}

/**
 * Returns current client string date-time value
 * @return string - current client string date-time value
 */
export function GetTime(): string {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }) + ': ';
}

/**
 * Return cloned object without links with original value, use careful
 * can works wrong with some complicated types!
 * @param val - value for cloning
 * @return ant - cloned value
 */
export function DeepCopy(val: any): any {
  return JSON.parse(JSON.stringify(val));
}

/**
 * Generates pseudo-uniq UUID
 * Be careful, if you need really uniq value - you shouldn't use it!
 * @return string - pseudo-uniq UUID
 */
export function GenerateUUID(): string {
  let d = new Date().getTime();

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    // tslint:disable-next-line:no-bitwise
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

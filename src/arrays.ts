import { IsNull } from "./common";

/**
 * Checking for null, undefined value, that have length > 0
 * @param array - array for checking
 * @return boolean - checking result
 */
export function IsArrayExist(array: any[]): boolean {
  return !IsNull(array) && array.length > 0;
}

/**
 * Makes arrays more flat, useful for arrays that contains another arrays
 * @param val - array with arrays
 * @return - array - result array
 */
export function Flat(val: any): any[] {
  return [].concat.apply([], val);
}

/**
 * Very subjective function...compares two arrays,
 * can be useful for fast comparision of string arrays or something like that
 * Don't use for complicated types! Be careful with that!!!
 * @param arr1 - first array for comparision
 * @param arr2 - second array for comparision
 * @return - comparision result
 */
export function ArraysAreEqual(arr1: any[], arr2: any[]): boolean {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

import { IsNull } from "./common";

export function IsArrayExist(array: any[]): boolean {
  return !IsNull(array) && array.length > 0;
}

export function Flat(val: any): any[] {
  return [].concat.apply([], val);
}

export function ArraysAreEqual(arr1: any[], arr2: any[]): boolean {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

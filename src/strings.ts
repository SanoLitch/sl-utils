import { IsNull } from "./common";

export function IsString(value: any): boolean {
  return typeof value === 'string' || value instanceof String;
}

export function Strignify(value: any): string {
  return JSON.stringify(value).replace('\n', '')
}

export function StringContains(val: string, pattern: string): string | null {
  if (val.includes(pattern)) {
    return pattern;
  }
  return null;
}
export function IsEmptyStr(str: string): boolean {
  return IsNull(str) || str.trim() === '';
}

export function ReplaceEmptyStr(str: string, replaceValue: any = ''): any {
  return IsEmptyStr(str) ? replaceValue : str;
}

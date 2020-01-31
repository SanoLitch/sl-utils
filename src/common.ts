import { IsString } from "./strings";

export function IsNull(val: any, searchNullInString: boolean = false): boolean {
  if (searchNullInString && IsString(val)) {
    return val.toLowerCase() === 'null' || val.toLowerCase() === 'undefined' || IsNull(val);
  }
  return val === null || val === undefined;
}

export function ReplaceNull(val: any, replaceValue: any): any {
  if (IsNull(val)) {
    return replaceValue;
  }
  return val;
}

export function TryParseObject(value: any): any {
  try {
    const obj = JSON.parse(value);

    return obj;
  } catch (e) {
    return value;
  }
}

export function GetTime(): string {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }) + ': ';
}

export function DeepCopy(val: any): any {
  return JSON.parse(JSON.stringify(val));
}

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

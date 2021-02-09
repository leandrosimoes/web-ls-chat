export declare function guid(): string;
declare type TDelayMS = number | undefined;
export declare const delay: (ms?: TDelayMS) => Promise<void>;
export declare const formatDate: (date: Date, format?: string) => string;
export declare const getTimeProperly: (date: Date) => string;
export {};

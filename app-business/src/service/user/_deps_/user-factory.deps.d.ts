export type Get<TResult> = (uri: string) => Promise<TResult>;
export type Put<TResult, TData> = (uri: string, data: TData) => Promise<TResult>;
export type Post<TResult, TData> = (uri: string, data: TData) => Promise<TResult>;
export type Remove<TResult> = (uri: string) => Promise<TResult>;
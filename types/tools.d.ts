declare namespace Tools {
    export interface Ajax {
        get<T>(uri: string): Promise<T>;
        delete<T>(uri: string): Promise<T>;
        put<T1, T2>(uri: string, data: T1): Promise<T2>;
        post<T1, T2>(uri: string, data: T1): Promise<T2>;
    }
}
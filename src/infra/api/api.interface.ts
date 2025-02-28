export interface BaseRequestOptions {
    router: string;
    parameters?: Record<string, string> | string | URLSearchParams;
}

export interface Api {
    getRequest<Return>(dto: BaseRequestOptions): Promise<Return>;
}
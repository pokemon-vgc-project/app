export interface BaseRequestOptions {
    router: string;
}

export interface Api {
    getRequest<Return>(dto: BaseRequestOptions): Promise<Return>;
}
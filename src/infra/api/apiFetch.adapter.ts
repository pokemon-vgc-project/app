import type { Api, BaseRequestOptions } from "./api.interface";

interface ApiFetchAdapterConstructor {
    baseUrl: string;

}

export class ApiFetchAdapter implements Api {
    private readonly baseUrl: string

    constructor({ baseUrl }: ApiFetchAdapterConstructor) {
        this.baseUrl = baseUrl
    }

    async getRequest<Return>({ router, parameters }: BaseRequestOptions): Promise<Return> {
        const props = parameters ? `?${new URLSearchParams(parameters).toString()}` : ''
        const response = await fetch(`${this.baseUrl}${router}${props}`, {
            method: 'GET',
        })

        const returnData = await response.json()
        if (!response.ok) {
            // TODO: implement the error handle
            throw new Error('Deu Ruim');
        }
        return returnData as Return
    }

}
import type { Api, BaseRequestOptions } from "./api.interface";

interface ApiFetchAdapterConstructor {
    baseUrl: string;

}

export class ApiFetchAdapter implements Api {
    private readonly baseUrl: string

    constructor({ baseUrl }: ApiFetchAdapterConstructor) {
        this.baseUrl = baseUrl
    }

    async getRequest<Return>({ router }: BaseRequestOptions): Promise<Return> {
        const response = await fetch(`${this.baseUrl}${router}`, {
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
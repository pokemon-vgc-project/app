import type { Nature } from "@/dto/nature.interface";
import type { BasePaginationResponse } from "@/dto/pokedex_api.interface";
import type { Api } from "@/infra/api/api.interface";

export class PokemonApi {
    constructor(private readonly api: Api) { }

    async getNatures(): Promise<BasePaginationResponse<Nature[]>> {
        return this.api.getRequest<BasePaginationResponse<Nature[]>>({
            router: '/natures',
        })
    }
}
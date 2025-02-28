import type { Nature } from "@/dto/nature.interface";
import type { Pokemon } from "@/dto/pokedex.interface";
import type { BasePaginationResponse } from "@/dto/pokedex_api.interface";
import type { Api } from "@/infra/api/api.interface";
import { pokemonParametersToURLSearchParams, type GetPokemonsParameters } from "./mappers/pokemon_parameters.mapper";



export class PokemonApi {
    constructor(private readonly api: Api) { }

    async getNatures(): Promise<BasePaginationResponse<Nature[]>> {
        return this.api.getRequest<BasePaginationResponse<Nature[]>>({
            router: '/natures',
        })
    }

    async getPokemons(dto: GetPokemonsParameters = {
        limit: 10,
    }): Promise<BasePaginationResponse<Pokemon[]>> {
        return this.api.getRequest<BasePaginationResponse<Pokemon[]>>({
            router: '/pokemons',
            parameters: pokemonParametersToURLSearchParams(dto),
        })
    }
}
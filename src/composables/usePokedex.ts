import type { Pokemon } from "@/dto/pokedex.interface"
import type { BasePaginationResponse } from "@/dto/pokedex_api.interface"
import { pokemonApi } from "@/services"
import type { GetPokemonsParameters } from "@/services/mappers/pokemon_parameters.mapper"
import { isRef, } from "vue"


export const usePokedex = async (dto?: GetPokemonsParameters):
    Promise<BasePaginationResponse<Pokemon[]>> => {
    const getParams = (): GetPokemonsParameters | undefined => {
        return isRef(dto) ? dto.value as GetPokemonsParameters : dto
    }
    return pokemonApi.getPokemons(getParams());
}
import type { Pokemon } from "@/dto/pokedex.interface"
import type { BasePaginationResponse } from "@/dto/pokedex_api.interface"
import { pokemonApi } from "@/services"
import type { GetPokemonsParameters } from "@/services/mappers/pokemon_parameters.mapper"
import { isRef, ref, watchEffect } from "vue"


export const usePokedex = (dto?: GetPokemonsParameters) => {
    const pokedex = ref<BasePaginationResponse<Pokemon[]> | null>(null)

    const getParams = (): GetPokemonsParameters | undefined => {
        return isRef(dto) ? dto.value as GetPokemonsParameters : dto
    }

    const fetchData = () => {
        pokedex.value = null

        pokemonApi.getPokemons(getParams())
            .then((resp) => pokedex.value = resp)
    }

    watchEffect(() => fetchData())

    return { pokedex }
}
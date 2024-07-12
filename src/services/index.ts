import { ApiFetchAdapter } from "@/infra/api/apiFetch.adapter"
import { PokemonApi } from "./pokemon.api"
import { setupAdapter } from './setup/setup.adapter'

export const setup = setupAdapter();

export const pokemonApi = new PokemonApi(new ApiFetchAdapter({
    baseUrl: setup.pokemonApiBaseUrl,
}));
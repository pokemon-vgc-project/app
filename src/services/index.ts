import { ApiFetchAdapter } from "@/infra/api/apiFetch.adapter";
import { PokemonApi } from "./pokemon.api";

export const pokemonApi = new PokemonApi(new ApiFetchAdapter({
    baseUrl: 'http://localhost:3001'
}));
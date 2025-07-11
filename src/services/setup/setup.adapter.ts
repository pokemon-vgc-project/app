import type { Setup } from "./setup.interface";

export const setupAdapter = (): Setup => ({
    pokemonApiBaseUrl: import.meta.env.VITE_POKEMON_API_BASE_URL ?? 'http://localhost:3001',
    wailordRepositoryUrl: import.meta.env.WAILORD_REPOSITORY_URL ?? 'http://wailord.vgcproject.test'
})
import { defineStore } from 'pinia'
import { usePokedex } from '@/composables/usePokedex'
import type { Pokemon } from "@/dto/pokedex.interface"
import type { Meta } from '@/dto/pokedex_api.interface'
import type { GetPokemonsParametersFilters } from '@/services/mappers/pokemon_parameters.mapper'


interface PokedexState {
  filters: GetPokemonsParametersFilters
  pokemons: Pokemon[] | null
  meta: Meta | null
  isLoading: boolean
  timeoutId: number | null
}

export const usePokedexStore = defineStore('pokedex', {
  state: (): PokedexState => ({
    filters: {},
    pokemons: null,
    meta: null,
    isLoading: false,
    timeoutId: null as ReturnType<typeof setTimeout> | null
  }),

  actions: {
    setSearch(newFilters: GetPokemonsParametersFilters) {
      const useDebounce = this.filters.name !== newFilters.name
      this.filters = newFilters

      if (!useDebounce) {
        this.performanceSearch()
        return;
      }
      this.debouncedSearch()
    },

    debouncedSearch() {
      this.clearDebounce()
      this.timeoutId = setTimeout(() => {
        this.performanceSearch()
      }, 500)
    },
    clearDebounce() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = 10
      }
    },

    async performanceSearch() {
      try {
        this.isLoading = true
        const result = await usePokedex({
          filters: this.filters,
          limit: 10
        })
        this.pokemons = result.data;
        this.meta = result.meta;
      } catch (error) {
        throw new Error('Deu ruim');
      } finally {
        this.isLoading = false
      }
    }
  }
})
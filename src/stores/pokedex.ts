import { defineStore } from 'pinia'
import { usePokedex } from '@/composables/usePokedex'
import type { Pokemon } from "@/dto/pokedex.interface"
import type { Meta } from '@/dto/pokedex_api.interface'
import type { GetPokemonsParametersFilters, GetPokemonsParametersSort } from '@/services/mappers/pokemon_parameters.mapper'


interface PokedexState {
  filters: GetPokemonsParametersFilters
  sorts: GetPokemonsParametersSort[]
  pokemons: Pokemon[] | null
  meta: Meta | null
  isLoading: boolean
  timeoutId: number | null
}

export const usePokedexStore = defineStore('pokedex', {
  state: (): PokedexState => ({
    filters: {},
    sorts: [],
    pokemons: null,
    meta: null,
    isLoading: false,
    timeoutId: null as ReturnType<typeof setTimeout> | null
  }),

  actions: {
    setFilters(newFilters: GetPokemonsParametersFilters) {
      const useDebounce = this.filters.name !== newFilters.name
      this.filters = newFilters

      if (!useDebounce) {
        this.performanceSearch()
        return;
      }
      this.debouncedSearch()
    },

    setOrder(newOrder: GetPokemonsParametersSort) {
      this.sorts = [newOrder]
      this.performanceSearch()
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
          sorts: this.sorts,
          limit: 12
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
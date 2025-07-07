<template>
  <div class="pokedex-menu">
    <div class="menu-search">
      <input type="text" placeholder="Search Pokémon..." v-model="params.searchTerm" class="search-input" />
    </div>
    <div class="menu-sort">
      <select v-model="params.selectOrder"
        class="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300">
        <option :key="order.value" v-for="order in params.selectOrders" :value="order.value">
          {{ order.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IPokedexMenuProps {
  searchTerm: string;
  selectOrder: string;
  selectOrders: { name: string; value: string }[];
  timeoutId: number | null;
}

import { ref, watch } from 'vue'
import { usePokedexStore } from '@/stores/pokedex';
import type { GetPokemonsParametersSort } from '@/services/mappers/pokemon_parameters.mapper';

const store = usePokedexStore()
const params = ref<IPokedexMenuProps>({
  searchTerm: "",
  selectOrders: [
    { name: "Number ASC", value: "pokemon_number:asc" },
    { name: "Number DESC", value: "pokemon_number:desc" },
    { name: "A to Z", value: "pokemon_name:asc" },
    { name: "Z to A", value: "pokemon_name:desc" },
    { name: "Height ASC", value: "pokemon_height:asc" },
    { name: "Height DESC", value: "pokemon_height:desc" },
    { name: "Weight ASC", value: "pokemon_weight:asc" },
    { name: "Weight DESC", value: "pokemon_weight:desc" },
    { name: "HP ASC", value: "pokemon_base_stats.hp:asc" },
    { name: "HP DESC", value: "pokemon_base_stats.hp:desc" },
    { name: "ATK ASC", value: "pokemon_base_stats.atk:asc" },
    { name: "ATK DESC", value: "pokemon_base_stats.atk:desc" },
    { name: "DEF ASC", value: "pokemon_base_stats.def:asc" },
    { name: "DEF DESC", value: "pokemon_base_stats.def:desc" },
    { name: "SPA ASC", value: "pokemon_base_stats.spa:asc" },
    { name: "SPA DESC", value: "pokemon_base_stats.spa:desc" },
    { name: "SPD ASC", value: "pokemon_base_stats.spd:asc" },
    { name: "SPD DESC", value: "pokemon_base_stats.spd:desc" },
    { name: "SPE ASC", value: "pokemon_base_stats.spe:asc" },
    { name: "SPE DESC", value: "pokemon_base_stats.spe:desc" },
  ],
  selectOrder: "pokemon_number:asc",
  timeoutId: null,
});

// Methods
const createOrder = (selectedOrder: string): GetPokemonsParametersSort => {
  const [name, order] = selectedOrder.split(":");
  return { name: name, order: order === 'desc' ? 'desc' : 'asc' };
}
const onSearch = (searchTerm: string) => {
  store.setFilters({
    name: searchTerm,
  })
}

//Watches
watch(() => params.value.searchTerm, (searchTerm: string) => {
  if (params.value.timeoutId) {
    clearTimeout(params.value.timeoutId)
  }
  params.value.timeoutId = setTimeout(() => {
    onSearch(searchTerm)
  }, 500)
})
watch(() => params.value.selectOrder, (selectedOrder: string) => {
  store.setOrder(createOrder(selectedOrder))
})
</script>

<style scoped>
.pokedex-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
}

.menu-search {
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
  border: solid 1px #f1f1f1;
}

.menu-search .search-input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
}

.menu-search .search-input:focus {
  outline: none;
}

.menu-search .search-input:-webkit-autofill,
.menu-search .search-input:autofill {
  -webkit-box-shadow: 0 0 0 1000px #fefefe inset !important;
  -webkit-text-fill-color: inherit !important;
  transition: background-color 5000s ease-in-out 0s;
}

.menu-sort {
  padding: 8px;
  font-size: 16px;
}
</style>
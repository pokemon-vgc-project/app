<template>
    <div>
        <PokedexMenu />
    </div>
    <div class="pokedex-container">
        <template v-if="!store.isLoading && store.pokemons?.length">
            <PokemonCard v-for="pokemon in store.pokemons" :key="pokemon.id" :pokemon="pokemon" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokedexMenu from '@/components/pokedex/PokedexMenu.vue';
import PokemonCard from './PokemonCard.vue';

const store = usePokedexStore()

</script>

<style scoped>
.pokedex-container {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
}
</style>
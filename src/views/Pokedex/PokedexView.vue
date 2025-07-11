<template>
    <TheContainer>
        <TheTitle>Pokedex</TheTitle>
        <PokedexComponent />
    </TheContainer>
</template>

<script setup lang="ts">
import PokedexComponent from '@/components/pokedex/PokedexComponent.vue'
import { usePokedexStore } from '@/stores/pokedex';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    const store = usePokedexStore()
    store.performanceSearch()
})
</script>

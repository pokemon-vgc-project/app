<template>
    <div class="pokemon-ability" :class="{
        'pokemon-ability-default-bg': ability.type === null || ability.type === undefined,
        'pokemon-ability-hidden-bg': ability.type === 'HIDDEN',
        'pokemon-ability-special-bg': ability.type === 'SPECIAL',
    }">
        <p>{{ ability.name }}</p>
        <span v-if="!!ability.type">{{ ability.type.charAt(0) }}</span>
    </div>
</template>

<script setup lang="ts">
import type { PokemonAbility } from '@/dto/pokedex.interface';
import { defineProps } from 'vue';

defineProps<{ ability: PokemonAbility }>();
</script>

<style scoped>
.pokemon-ability {
    @apply flex justify-between rounded-md p-1;
    border: solid 1px #e5e7eb;
}

.pokemon-ability>p {
    font-weight: 300;
}

.pokemon-ability>span {
    font-weight: 500;
    border-left: solid 0.3px;
    padding-left: 5px;
    margin-left: 5px;
}

.pokemon-ability-default-bg {
    background-color: #eff2f4;
}

.pokemon-ability-hidden-bg {
    background-color: #e7f0f8;
}

.pokemon-ability-special-bg {
    background-color: #f8f8e7;
}
</style>
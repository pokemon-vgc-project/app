<template>
    <div class="pokemon-card-container">
        <div class="pokemon-card-inside">
            <div class="pokemon-card-header">
                <p>#{{ pokemon.num }} <span>{{ pokemon.name }}</span></p>
                <div class="pokemon-card-types">
                    <PokemonTypeIcon v-for="type in pokemon.types" :key="type" :type="type" />
                </div>
            </div>
            <div class="pokemon-card-image">
                <img :src="pokemon.imgLink" :alt="pokemon.name" />
            </div>
            <div>
                <div class="pokemon-card-attributes">
                    <p>
                        <OhVueIcon name="la-ruler-solid" />
                        <span class="attributes-value">{{ formatDecimal(pokemon.heightm ?? 0) }}m</span>
                    </p>
                    <p>
                        <OhVueIcon name="la-weight-solid" />
                        <span class="attributes-value">{{ formatDecimal(pokemon.weightkg ?? 0) }}Kg</span>
                    </p>
                    <p>
                        <OhVueIcon name="co-paw" />
                        <span class="attributes-value">{{ pokemon.forme || 'Default' }}</span>
                    </p>
                </div>
                <div class="pokemon-card-stats">
                    <p><span>HP</span> {{ pokemon.baseStats.hp }}</p>
                    <p><span>ATK</span> {{ pokemon.baseStats.atk }}</p>
                    <p><span>DEF</span> {{ pokemon.baseStats.def }}</p>
                    <p><span>SPA</span> {{ pokemon.baseStats.spa }}</p>
                    <p><span>SPD</span> {{ pokemon.baseStats.spd }}</p>
                    <p><span>SPE</span> {{ pokemon.baseStats.spe }}</p>
                </div>

                <hr>

                <div class="pokemon-abilities">
                    <PokemonAbility v-for="ability in pokemon.abilities" :key="`${pokemon.id}_${ability.id}`"
                        :ability="ability" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/dto/pokedex.interface';
import { defineProps } from 'vue';
import PokemonTypeIcon from './PokemonTypeIcon.vue';
import PokemonAbility from './PokemonAbility.vue';
import { formatDecimal } from '../../infra/formatters/math.formatter'

defineProps<{ pokemon: Pokemon }>();
</script>

<style scoped>
.pokemon-card-container {
    @apply bg-white border border-gray-200 rounded-lg shadow-md;
    padding: 10px;
}

.pokemon-card-inside {
    @apply bg-gray-50 border border-gray-200 rounded-lg;
    height: 100%;
    padding: 10px;
}

.pokemon-card-header {
    @apply flex justify-between font-bold font-mono;
}

.pokemon-card-types {
    display: flex;
    justify-items: end;
    height: 20px;
}

.pokemon-card-types>img:last-child {
    margin-left: 5px;
}

.pokemon-card-image {
    margin: 10px 0;
    padding: 5px;
    background-color: rgb(217 217 217);
    border-radius: 5px;
}


.pokemon-card-attributes {
    @apply grid grid-cols-3 gap-1;
}

.pokemon-card-attributes>p {
    @apply flex;
}

.pokemon-card-attributes>p>.attributes-value {
    @apply flex items-center;
    font-size: 10px;
}

.pokemon-card-stats {
    @apply grid grid-cols-3 gap-2;
}

.pokemon-card-stats span {
    @apply font-bold;
}

hr {
    @apply mt-2 mb-2;
}

.pokemon-abilities {
    @apply flex flex-wrap gap-2;
}
</style>
<template>
    <table v-if="natures">
        <thead>
            <tr>
                <th></th>
                <th>Increase</th>
                <th>Decrease</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="nature in natures" :key="nature.id">
                <td>{{ nature.name }}</td>
                <td>{{ nature.increase }}</td>
                <td>{{ nature.decrease }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useNatures } from '@/composables/useNatures';

const { natures } = useNatures()
</script>

<style scoped>
table {
    @apply table-auto border-collapse border w-full;
}

table th {
    @apply text-lg font-bold bg-red-500 text-white;
}

table td {
    @apply text-sm;
}

table tbody td:first-child {
    @apply text-lg font-medium;
}

table tbody tr:hover {
    @apply bg-cyan-400 text-stone-50 duration-300;
}

table th,
table td {
    @apply border-b text-center p-4 cursor-default;
}
</style>
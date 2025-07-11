<template>
    <img :src="`${setup.wailordRepositoryUrl}/types/${type.toLocaleLowerCase()}.svg`" :alt="type">
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { setup } from '../../services';
defineProps<{ type: string }>();
</script>

<style scoped>
img {
    height: 100%;
    width: 100%;
}
</style>
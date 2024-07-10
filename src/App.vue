<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/nav/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <section class="content">
    <RouterView />
  </section>
</template>

<style scoped>
.content {
  @apply relative top-20;
}
</style>
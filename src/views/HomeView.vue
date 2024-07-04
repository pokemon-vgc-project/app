<template>
  <main>
    HOME PAGE
    {{ userName }}
  </main>
</template>

<script setup type="ts">
import { userStore } from '@/stores/user'
import { computed } from 'vue';

const store = userStore()

const userName = computed(() => store.userName);
</script>

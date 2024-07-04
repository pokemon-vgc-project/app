import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const userStore = defineStore('user', () => {
    const name = ref('Tiago')

    const userName = computed(() => name)

    return { name, userName }
})
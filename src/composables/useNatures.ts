import type { Nature } from "@/dto/nature.interface"
import { pokemonApi } from "@/services"
import { ref, watchEffect } from "vue"

export const useNatures = () => {
    const natures = ref<Nature[] | null>(null)

    const fetchData = () => {
        natures.value = null

        pokemonApi.getNatures()
            .then((resp) => natures.value = resp.data)
    }

    watchEffect(() => fetchData())

    return { natures }
}
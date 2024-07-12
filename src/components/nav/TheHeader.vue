<template>
    <header class="absolute left-0 top-0 right-0 w-ful">
        <nav>
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <!-- Navigation links -->
                <div class="flex w-full flex-wrap justify-start">
                    <div class="ml-10">
                        <RouterLink :to="{ name: 'home' }">
                            <img class="h-16" src="@/assets/images/pokedex-logo.png">
                        </RouterLink>
                    </div>
                    <ul class="me-auto flex flex-row justify-between">
                        <li class="h-16">
                            <RouterLink :to="{ name: 'natures' }">Natures</RouterLink>
                        </li>
                        <li class="h-16">
                            <a href="#Pokedex">Pokedex</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
nav {
    @apply relative flex w-full items-center justify-between bg-white shadow-lg shadow-stone-300;
}

ul {
    @apply text-lg text-stone-700 font-thin ml-12;
}

ul li a {
    @apply flex size-full items-center px-2 bg-white font-serif border-b-4 border-transparent transition duration-0 ease-in;
}

.router-link-active {
    @apply border-b-4 border-red-400 duration-300;
}

ul li a:hover {
    @apply bg-cyan-400 text-stone-50 duration-300 delay-200;
}
</style>
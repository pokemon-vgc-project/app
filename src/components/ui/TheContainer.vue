<template>
    <div>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<style scoped>
div {
    @apply container mx-auto min-h-[calc(100vh-124px)] bg-white;
}

div main {
    @apply p-12;
}
</style>
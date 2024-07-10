<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<style scoped>
h1 {
    @apply font-mono text-3xl text-left underline decoration-cyan-400 decoration-4 underline-offset-8 mb-8;
}
</style>
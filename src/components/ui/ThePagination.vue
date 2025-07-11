<template>
    <div class="pagination-container">
        <slot></slot>
    </div>
</template>

<style scoped>
.pagination-container {
    @apply flex justify-center items-center gap-2;
}
</style>

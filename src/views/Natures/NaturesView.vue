<template>
    <TheContainer>
        <TheTitle>Natures</TheTitle>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Increase</th>
                    <th>Decrease</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </tbody>
        </table>
    </TheContainer>
</template>

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
    @apply border-b text-center p-4;
}
</style>
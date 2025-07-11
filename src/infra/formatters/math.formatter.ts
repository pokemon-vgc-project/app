export const formatDecimal = (value?: number) => {
    if (value === null || value === undefined) return 0
    return value.toFixed(2)
}
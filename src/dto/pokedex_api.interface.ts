interface Meta {
    page: number
    skip: number
    limit: number
    itemCount: number
    pageCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export interface BasePaginationResponse<Data> {
    data: Data
    meta: Meta
}
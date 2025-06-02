export interface FilterStartEndModel {
    start?: number;
    end?: number;
}

interface GetPokemonsParametersSort {
    name: string;
    order?: 'asc' | 'desc';
}

export interface GetPokemonsParametersFilters {
    forms?: string[];
    types?: number[];
    abilities?: number[];
    name?: string;
    pokemonNum?: FilterStartEndModel;
    heightm?: FilterStartEndModel;
    weightkg?: FilterStartEndModel;
}
export interface GetPokemonsParameters {
    limit?: number;
    skip?: number;
    sorts?: GetPokemonsParametersSort[];
    filters?: GetPokemonsParametersFilters;
}

export const pokemonParametersToURLSearchParams = (dto: GetPokemonsParameters): URLSearchParams => {
    const params = new URLSearchParams();
    if (dto.limit) {
        params.append('limit', dto.limit.toString());
    }
    if (dto.skip) {
        params.append('skip', dto.skip.toString());
    }
    if (dto.sorts) {
        dto.sorts.forEach((sort) => {
            params.append('sorts[]', JSON.stringify(sort));
        });
    }
    if (dto.filters) {
        params.append('filters', JSON.stringify(dto.filters));
    }
    return params;

};
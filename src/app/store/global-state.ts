export interface IGlobalState {
    filter: string;
    repos: Array<any>;
}

export const SEARCH_REQUESTED = 'SEARCH_REQUESTED';
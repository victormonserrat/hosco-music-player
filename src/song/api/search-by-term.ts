import axios  from 'axios';

export const searchByTerm = (term: string) =>
    axios.get(SEARCH_BY_TERM(term))
;

export const SEARCH_BY_TERM = (term: string): string =>
    `${process.env.API_URL}/search?media=music&term=${encodeURI(term)}&limit=${process.env.SEARCH_LIMIT}`
;
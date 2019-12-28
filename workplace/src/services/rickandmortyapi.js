import fetch from 'utils/fetch';

export function getCharacters(page = 1) {
  return fetch(`character/?page=${page}`);
}

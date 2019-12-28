import fetch from 'utils/fetch';

export function getCharacters(page = 1) {
  return fetch(`${process.env.REACT_APP_RICKANDMORTY_API}character/?page=${page}`);
}

import { getCharacter } from 'rickmortyapi';

import { CHARACTERS_LOADING, CHARACTERS_UPDATE_CHARACTERS } from './actionNames';

export const requestCharacters = (page, removePrevious = false) => async dispatch => {
  dispatch({
    type: CHARACTERS_LOADING
  });

  const {
    info: { pages },
    results: characters
  } = await getCharacter({
    page
  });

  dispatch({
    type: CHARACTERS_UPDATE_CHARACTERS,
    payload: { characters, removePrevious, page, pageLimit: pages }
  });
};

export const requestAllCharacters = () => async (dispatch, getState) => {
  let {
    characters: { characters, page, pageLimit }
  } = getState();

  dispatch({
    type: CHARACTERS_LOADING
  });

  if (!page) {
    const firstCharacters = await getCharacter({ page: 1 });

    characters = firstCharacters.results;
    page = 1;
    pageLimit = firstCharacters.info.pages;
  }

  for (let i = page + 1; i <= pageLimit; i++) {
    const response = await getCharacter({ page: i });

    characters = [...characters, ...response.results];
    page = i;
    pageLimit = response.info.pages;
  }

  dispatch({
    type: CHARACTERS_UPDATE_CHARACTERS,
    payload: { characters, page, pageLimit }
  });
};

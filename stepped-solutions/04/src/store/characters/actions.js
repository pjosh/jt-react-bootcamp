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

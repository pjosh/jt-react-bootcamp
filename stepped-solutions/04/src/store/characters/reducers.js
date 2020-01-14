import { CHARACTERS_LOADING, CHARACTERS_UPDATE_CHARACTERS } from './actionNames';

const INITIAL_STATE = {
  characters: [],
  loading: false,
  page: null,
  pageLimit: null
};

const reducers = (state = {}, action) => {
  switch (action.type) {
    case CHARACTERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CHARACTERS_UPDATE_CHARACTERS:
      const { characters, removePrevious, page, pageLimit } = action.payload;

      return {
        ...state,
        characters: removePrevious ? characters : [...state.characters, ...characters],
        loading: false,
        page,
        pageLimit
      };
    default:
      return INITIAL_STATE;
  }
};

export default reducers;

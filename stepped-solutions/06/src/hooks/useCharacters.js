import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCharacters } from 'store/characters/actions';

function useCharacters() {
  const dispatch = useDispatch();
  const { characters, loading, page, pageLimit } = useSelector(state => state.characters);
  const loadMoreCharacters = () => {
    const nextPage = page + 1 || 1;

    if (!loading && (!page || nextPage <= pageLimit)) {
      dispatch(requestCharacters(nextPage));
    }
  };

  useEffect(() => {
    if (!characters.length) {
      loadMoreCharacters();
    }
  }, []);

  return {
    characters,
    loadMoreCharacters
  };
}

export default useCharacters;

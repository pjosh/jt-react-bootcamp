import React, { useMemo } from 'react';
import { Waypoint } from 'react-waypoint';
import useCharacters from 'hooks/useCharacters';
import Header from 'components/Header';
import CharacterList from 'components/CharacterList';

const List = () => {
  const { characters, loadMoreCharacters } = useCharacters();
  const renderContent = useMemo(
    () =>
      !!characters.length && (
        <>
          <CharacterList characters={characters} />
          <Waypoint onEnter={loadMoreCharacters} />
        </>
      ),
    [characters]
  );

  return (
    <div>
      <Header small />
      {renderContent}
    </div>
  );
};

export default List;

import React from 'react';
import Character from 'components/Character';
import styles from './styles.module.scss';

const CharacterList = ({ characters }) => {
  return (
    <div className={styles.container}>
      {characters.map(character => (
        <Character
          episodes={character.episode.length}
          gender={character.gender}
          image={character.image}
          key={character.id}
          location={character.location.name}
          name={character.name}
          origin={character.origin.name}
          species={character.species}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharacterList;

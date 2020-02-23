import React from 'react';
import Episode from 'components/Episode';
import styles from './styles.module.scss';

const EpisodeList = ({ episodes }) => {
  return (
    <div className={styles.container}>
      {episodes.map(episode => (
        <Episode
          key={episode.id}
          date={episode.air_date}
          index={episode.episode}
          name={episode.name}
        />
      ))}
    </div>
  );
};

export default EpisodeList;

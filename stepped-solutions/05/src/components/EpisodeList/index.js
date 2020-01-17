import React from 'react';
import ConfirmModal from 'DesignSystemComponents/organisms/Modals';
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
      {/* <ConfirmModal
        onCancel={action}
        onConfirm={action}
        showModal={action}
        title="Do you want to watch this episode?"
        subtitle=""
      /> */}
    </div>
  );
};

export default EpisodeList;

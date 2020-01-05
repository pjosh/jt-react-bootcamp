import React, { memo } from 'react';
import styles from './styles.module.scss';

const Character = ({ episodes, gender, image, location, name, origin, species, status }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${image}")`
        }}
      ></div>
      <div className={styles.data}>
        <div className={styles.species}>{species}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>
          {`${name} is a ${species} (${gender}). Was born in ${origin} and lives on ${location}`}
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <div className={styles.statsValue}>{gender}</div>
          <div className={styles.statsTitle}>GENDER</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsValue}>{status}</div>
          <div className={styles.statsTitle}>STATUS</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsValue}>{episodes}</div>
          <div className={styles.statsTitle}>EPISODES</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Character);

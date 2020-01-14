import React, { memo } from 'react';
import image from './images/rickandmorty-slug.png';
import styles from './styles.module.scss';

function CharacterAdder({ onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={image} className={styles.image} alt="image" />
      </div>
    </div>
  );
}

export default memo(CharacterAdder);

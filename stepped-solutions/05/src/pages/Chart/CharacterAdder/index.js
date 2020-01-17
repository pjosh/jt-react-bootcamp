import React, { memo } from 'react';
import Button from 'DesignSystemComponents/atoms/Button';
import image from './images/rickandmorty-slug.png';
import styles from './styles.module.scss';

function CharacterAdder({ disabled = false, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={image} className={styles.image} alt="slug" />
        <Button className={styles.button} disabled={disabled} onSelect={onClick} tiny>
          Load all data!
        </Button>
      </div>
    </div>
  );
}

export default memo(CharacterAdder);

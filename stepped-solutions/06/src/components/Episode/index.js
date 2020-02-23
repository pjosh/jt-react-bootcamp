import React, { memo } from 'react';
import styles from './styles.module.scss';

const Episode = ({ date, index, name }) => {
  return (
    <div className={styles.container}>
      {index} - {name}
    </div>
  );
};

export default memo(Episode);

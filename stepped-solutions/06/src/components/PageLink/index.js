import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function PageLink({ image, url }) {
  return (
    <div className={styles.container}>
      <Link to={url}>
        <img src={image} className={styles.image} alt="page-link" />
      </Link>
    </div>
  );
}

export default PageLink;

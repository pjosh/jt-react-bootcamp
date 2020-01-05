import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from 'router/paths';
import logo from './images/rickandmorty-logo.svg';
import styles from './styles.module.scss';

function Header({ small = false }) {
  return (
    <div className={`${styles.container} ${small ? styles.small : ''}`}>
      <Link to={HOME_PATH}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Header;

import React from 'react';
import logo from './images/rickandmorty-logo.svg';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
}

export default Header;

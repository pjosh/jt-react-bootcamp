import React from 'react';
import Header from 'components/Header';
import PageLink from 'components/PageLink';
import { LIST_PATH, CHART_PATH, EPISODES_PATH } from 'router/paths';
import styles from './styles.module.scss';
import rickMortyArchiveImage from './images/rick-morty-archive.png';
import rickMortyPortalImage from './images/rick-morty-portal.png';
import rickPickleImage from './images/rick-pickle.png';

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.links}>
        <PageLink image={rickMortyArchiveImage} url={LIST_PATH} />
        <PageLink image={rickMortyPortalImage} url={CHART_PATH} />
        <PageLink image={rickPickleImage} url={EPISODES_PATH} />
      </div>
    </div>
  );
}

export default Home;

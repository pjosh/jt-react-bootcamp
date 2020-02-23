import React from 'react';
import Header from 'components/Header';
import PieChart from 'components/PieChart';
import BlankSlate from 'DesignSystemComponents/organisms/BlankSlate';
import CharacterAdder from './CharacterAdder';
import rickMortyPickleLemonImage from './images/rick-morty-pickle-lemon.png';
import styles from './styles.module.scss';

class Chart extends React.Component {
  requestAllCharacters = () => {
    const { requestAllCharacters } = this.props;

    requestAllCharacters();
  };

  render() {
    const {
      genderChartData,
      locationChartData,
      statusChartData,
      speciesChartData,
      page,
      pageLimit
    } = this.props;
    const disableAdder = !!page && page === pageLimit;
    const haveData =
      genderChartData.length &&
      locationChartData.length &&
      statusChartData.length &&
      speciesChartData.length;

    return (
      <div className={styles.container}>
        <Header small />
        <CharacterAdder disabled={disableAdder} onClick={this.requestAllCharacters} />

        {haveData ? (
          <>
            <PieChart data={genderChartData} title="Gender" />
            <PieChart data={locationChartData} title="Location" />
            <PieChart data={statusChartData} title="Status" />
            <PieChart data={speciesChartData} title="Species" />
          </>
        ) : (
          <BlankSlate
            buttonLabel="Load data!"
            onSelect={this.requestAllCharacters}
            title="No data :'("
            imageRoute={rickMortyPickleLemonImage}
          />
        )}
      </div>
    );
  }
}

export default Chart;

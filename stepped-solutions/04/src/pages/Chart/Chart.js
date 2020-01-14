import React from 'react';
import Header from 'components/Header';
import PieChart from 'components/PieChart';
import CharacterAdder from './CharacterAdder';
import styles from './styles.module.scss';

class Chart extends React.Component {
  // componentDidMount() {
  //   this.requestAllCharacters();
  // }

  // componentDidUpdate(prevProps) {
  //   const { page: prevPage } = prevProps;
  //   const { page } = this.props;

  //   if (!prevPage && page !== prevPage) {
  //     this.requestAllCharacters();
  //   }
  // }

  // shouldComponentUpdate(nextProps) {
  //   const { page, pageLimit } = nextProps;
  //   console.log(nextProps);
  //   console.log('shouldComponentUpdate');
  //   return page === pageLimit;
  // }

  // async requestFirstCharacters() {
  //   const { requestCharacters } = this.props;

  //   await requestCharacters(1);
  // }

  // async requestAllCharacters() {
  //   const { requestCharacters, page, pageLimit } = this.props;

  //   for (let i = page + 1; i <= pageLimit; i++) {
  //     await requestCharacters(i);
  //   }
  // }

  render() {
    const { genderChartData, locationChartData, statusChartData, speciesChartData } = this.props;

    return (
      <div className={styles.container}>
        <Header small />
        <CharacterAdder />
        <PieChart data={genderChartData} title="Gender" />
        <PieChart data={locationChartData} title="Location" />
        <PieChart data={statusChartData} title="Status" />
        <PieChart data={speciesChartData} title="Species" />
      </div>
    );
  }
}

export default Chart;

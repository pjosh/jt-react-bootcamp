import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestCharacters } from 'store/characters/actions';
import {
  getGenderChartData,
  getLocationChartData,
  getStatusChartData,
  getSpeciesChartData
} from 'store/characters/selectors';
import Chart from './Chart';

const mapStateToProps = state => ({
  genderChartData: getGenderChartData(state.characters.characters),
  locationChartData: getLocationChartData(state.characters.characters),
  statusChartData: getStatusChartData(state.characters.characters),
  speciesChartData: getSpeciesChartData(state.characters.characters),
  page: state.characters.page,
  pageLimit: state.characters.pageLimit
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestCharacters
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Chart);

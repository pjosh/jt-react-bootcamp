import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestCharacters } from 'store/characters/actions';
import List from './List';

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(List);

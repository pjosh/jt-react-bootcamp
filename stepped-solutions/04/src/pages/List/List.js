import React from 'react';
import { Waypoint } from 'react-waypoint';
import CharacterList from 'components/CharacterList';
import Header from 'components/Header';

class List extends React.Component {
  componentDidMount() {
    const { characters } = this.props;

    if (!characters.length) {
      this.requestCharacters();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { loading } = nextProps;

    return !loading;
  }

  async requestCharacters() {
    const { loading, requestCharacters, page, pageLimit } = this.props;
    const nextPage = page + 1 || 1;

    if (!loading && (!page || nextPage <= pageLimit)) {
      requestCharacters(nextPage);
    }
  }

  onWaypointEnter = () => {
    this.requestCharacters();
  };

  render() {
    const { characters } = this.props;

    return (
      <div>
        <Header small />
        {characters.length && <CharacterList characters={characters} />}
        <Waypoint onEnter={this.onWaypointEnter} />
      </div>
    );
  }
}

export default List;

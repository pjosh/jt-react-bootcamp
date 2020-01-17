import React from 'react';
import { getCharacter } from 'rickmortyapi';
import { Waypoint } from 'react-waypoint';
import CharacterList from 'components/CharacterList';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      loading: false,
      page: undefined,
      pageLimit: undefined
    };
  }

  componentDidMount() {
    this.requestCharacters();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { loading } = nextState;

    return !loading;
  }

  async requestCharacters() {
    const { characters: currentCharacters, loading, page, pageLimit } = this.state;
    const nextPage = page + 1 || 1;

    if (!loading && (!page || nextPage <= pageLimit)) {
      this.setState({
        loading: true
      });

      const {
        info: { pages },
        results: characters
      } = await getCharacter({
        page: nextPage
      });

      this.setState({
        characters: [...currentCharacters, ...characters],
        loading: false,
        page: nextPage,
        pageLimit: pages
      });
    }
  }

  onWaypointEnter = () => {
    this.requestCharacters();
  };

  render() {
    const { characters } = this.state;

    return (
      <div>
        {!!characters.length && <CharacterList characters={characters} />}
        <Waypoint onEnter={this.onWaypointEnter} />
      </div>
    );
  }
}

export default List;

import React from 'react';
import { getEpisode } from 'rickmortyapi';

const StoreContext = React.createContext();

class StoreContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      loading: false,
      page: null,
      pageLimit: null,
      requestEpisodes: this.requestEpisodes
    };
  }

  requestEpisodes = page => {
    this.setState(
      {
        loading: true
      },
      async () => {
        const { episodes } = this.state;
        const {
          info: { pages: pageLimit },
          results: newEpisodes
        } = await getEpisode({
          page
        });

        this.setState({
          episodes: [...episodes, ...newEpisodes],
          loading: false,
          page,
          pageLimit
        });
      }
    );
  };

  render() {
    const { children } = this.props;

    return <StoreContext.Provider value={this.state}>{children}</StoreContext.Provider>;
  }
}

export function withStoreContext(WrappedComponent) {
  return props => (
    <StoreContext.Consumer>
      {value => <WrappedComponent {...props} store={value} />}
    </StoreContext.Consumer>
  );
}

export default StoreContextProvider;

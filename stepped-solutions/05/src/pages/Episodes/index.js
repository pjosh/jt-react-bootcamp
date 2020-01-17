import React from 'react';
import { Waypoint } from 'react-waypoint';
import { withLanguageContext } from 'context/LanguageContext';
import { withStoreContext } from 'context/StoreContext';
import EpisodeList from 'components/EpisodeList';
import Header from 'components/Header';

class Episodes extends React.Component {
  componentDidMount() {
    const {
      store: { episodes }
    } = this.props;

    if (!episodes.length) {
      this.requestEpisodes();
    }
  }

  shouldComponentUpdate(nextProps) {
    const {
      store: { loading }
    } = nextProps;

    return !loading;
  }

  async requestEpisodes() {
    const {
      store: { loading, page, pageLimit, requestEpisodes }
    } = this.props;
    const nextPage = page + 1 || 1;

    if (!loading && (!page || nextPage <= pageLimit)) {
      requestEpisodes(nextPage);
    }
  }

  onWaypointEnter = () => {
    this.requestEpisodes();
  };

  render() {
    const {
      store: { episodes }
    } = this.props;

    return (
      <div>
        <Header small />
        {!!episodes.length && <EpisodeList episodes={episodes} />}
        <Waypoint onEnter={this.onWaypointEnter} />
      </div>
    );
  }
}

export default withLanguageContext(withStoreContext(Episodes));

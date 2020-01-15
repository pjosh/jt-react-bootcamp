import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

export default class TabsPanel extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.shape({ type: PropTypes.oneOf([Tab]) }),
      PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.function }))
    ])
  };

  static defaultProps = {
    className: '',
    children: []
  };

  state = {
    activeTab: this.activeTab(this.props.children)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ activeTab: this.activeTab(nextProps.children) });
  }

  handleTabSelection = selectedTab => {
    this.setState({ activeTab: selectedTab });
  };

  activeTab(children) {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.find(tab => tab.props.selected) || childrenArray[0];
  }

  renderNavButton = tab => {
    const classNames = `ds-atom-tab ${
      tab.props.title === this.state.activeTab.props.title ? ' selected' : ''
    }`;
    return (
      <button type="button" className={classNames} onClick={() => this.handleTabSelection(tab)}>
        {tab.props.title}
      </button>
    );
  };

  renderNavBar() {
    return (
      <nav className="ds-atom-tab-menu">
        {React.Children.map(this.props.children, this.renderNavButton)}
      </nav>
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderNavBar()}
        {this.state.activeTab}
      </div>
    );
  }
}

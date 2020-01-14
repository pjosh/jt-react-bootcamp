import React from 'react';
import PropTypes from 'prop-types';

export default class Tab extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    selected: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    children: PropTypes.node
  };

  static defaultProps = {
    className: '',
    selected: false,
    children: ''
  };

  render() {
    return (
      <div className={`ds-side-panel-content ${this.props.className}`}>{this.props.children}</div>
    );
  }
}

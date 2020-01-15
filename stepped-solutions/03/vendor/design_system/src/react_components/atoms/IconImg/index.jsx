import React from 'react';
import PropTypes from 'prop-types';

export default class IconImg extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired
  };

  render() {
    return <span className={`ds-atom-option-picker-icon sprite sprite-icon-${this.props.icon}`} />;
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import iconsSvg from 'DesignSystem/images/icons.svg';

export default class IconSvg extends React.PureComponent {
  static propTypes = {
    localSource: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    localSource: false,
    className: ''
  };

  render() {
    return (
      <svg className={`icon ic-${this.props.icon} ${this.props.className}`}>
        <use xlinkHref={`${this.props.localSource ? '' : iconsSvg}#ic-${this.props.icon}`} />
      </svg>
    );
  }
}

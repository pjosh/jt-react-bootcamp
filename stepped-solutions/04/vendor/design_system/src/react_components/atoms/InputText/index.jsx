import React from 'react';
import PropTypes from 'prop-types';
import 'DesignSystem/styles/atoms';

// Matches class name with Design System Zeplin
export default class InputText extends React.PureComponent {
  static propTypes = {
    error: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    error: false,
    className: ''
  };

  buildClassName() {
    return ['ds-atom-text-input-normal', this.props.error ? 'error' : '', this.props.className]
      .filter(klass => klass !== null)
      .join(' ');
  }

  render() {
    const className = this.buildClassName();
    const props = { ...this.props, className };
    delete props.error;
    return <input {...props} />;
  }
}

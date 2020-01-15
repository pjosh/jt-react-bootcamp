import React from 'react';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

export default class Select extends React.PureComponent {
  static propTypes = ReactSelect.propTypes;

  static defaultProps = { ...ReactSelect.defaultProps };

  buildClassName() {
    return [
      'ds-atom-vendor-select-input-normal',
      this.props.error ? 'error' : null,
      this.props.className
    ]
      .filter(x => x)
      .join(' ');
  }

  render() {
    const className = this.buildClassName();
    const selectProps = { ...this.props, className };
    return <ReactSelect {...selectProps} />;
  }
}

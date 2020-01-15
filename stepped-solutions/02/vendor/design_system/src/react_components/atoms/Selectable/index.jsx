import React from 'react';
import PropTypes from 'prop-types';

export default class Selectable extends React.Component {
  static propTypes = {
    classNames: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  };

  static defaultProps = {
    classNames: [],
    selected: false
  };

  handleSelect = event => {
    event.preventDefault();
    this.props.onSelect(this.props.value, this.props.label);
  };

  buttonClasses() {
    const classNames = [...this.props.classNames];
    if (this.props.selected) {
      classNames.push('selected');
    }
    return classNames.join(' ');
  }

  render() {
    return (
      <button type="button" onClick={this.handleSelect} className={this.buttonClasses()}>
        {this.props.label}
      </button>
    );
  }
}

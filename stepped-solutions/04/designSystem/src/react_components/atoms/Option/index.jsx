import React from 'react';
import PropTypes from 'prop-types';
import Selectable from '../Selectable';

export default class Option extends React.Component {
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

  buttonClasses() {
    return [...this.props.classNames, 'ds-filter-menu-dropdown-list-link'];
  }

  render() {
    const selectableProps = { ...this.props, classNames: this.buttonClasses() };
    return <Selectable {...selectableProps} />;
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import 'DesignSystem/styles/atoms';

// eslint-disable-next-line react/prefer-stateless-function
export default class DropDownCell extends React.Component {
  static propTypes = {
    classNames: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    classNames: []
  };

  render() {
    const classes = [...this.props.classNames, 'ds-atom-drop-down-cell'].join(' ');
    return <div className={classes}>{this.props.children}</div>;
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import IconImg from 'DesignSystemComponents/atoms/IconImg';

export default class ActionButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    arrow: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    className: null,
    icon: null,
    disabled: false,
    arrow: false,
    onClick: () => {}
  };

  handleClick = event => {
    this.props.onClick(event);
  };

  buttonClasses() {
    const classes = ['ds-mol-option-picker-trigger'];
    if (this.props.title.length === 0) classes.push('empty');
    if (!this.props.arrow) classes.push('no-arrow');
    if (this.props.disabled) classes.push('disabled');
    if (this.props.className) classes.push(this.props.className);
    return classes.join(' ');
  }

  render() {
    return (
      <button type="button" className={this.buttonClasses()} onClick={this.handleClick}>
        {this.props.children}
        {this.props.icon && <IconImg icon={this.props.icon} />}
        {this.props.title}
      </button>
    );
  }
}

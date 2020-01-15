import React from 'react';
import PropTypes from 'prop-types';
import 'DesignSystem/styles/all'; // TO-DO: Narrow this to the really required styles
import ActionButton from '../ActionButton';

export default class OptionPicker extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    arrow: PropTypes.bool,
    open: PropTypes.bool,
    dropDown: PropTypes.element.isRequired
  };

  static defaultProps = {
    children: null,
    className: '',
    icon: null,
    disabled: false,
    arrow: false,
    onClick: () => {},
    open: false
  };

  state = {
    open: this.props.open
  };

  handleClick = e => {
    this.toggleOpen();
    e.preventDefault();
    e.stopPropagation();
  };

  handleClose = () => this.close();

  handleApply = () => {
    this.handleClose();
    const { dropDown } = this.props;
    const originalHandler = dropDown.props.onApply;
    originalHandler.apply(dropDown);
  };

  toggleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  calculateClassName() {
    if (this.props.arrow) {
      if (this.state.open) {
        return `ds-mol-option-picker ds-mol-option-picker-open ${this.props.className}`;
      }
      return `ds-mol-option-picker ds-mol-option-picker-closed ${this.props.className}`;
    }
    return `ds-mol-option-picker ${this.props.className}`;
  }

  renderMenu() {
    if (!this.state.open) return null;
    return React.cloneElement(this.props.dropDown, {
      onClose: this.handleClose,
      onApply: this.handleApply
    });
  }

  render() {
    const actionButton = this.props.children ? (
      React.Children.map(this.props.children, child =>
        React.cloneElement(child, { onClick: this.handleClick, onSelect: this.toggleOpen })
      )
    ) : (
      <ActionButton {...this.props} onClick={this.handleClick} arrow empty />
    );

    return (
      <div className={this.calculateClassName()}>
        {actionButton}
        {this.renderMenu()}
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import Selectable from 'DesignSystemComponents/atoms/Selectable';

export default class DropDown extends React.Component {
  static propTypes = {
    applyLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    multiple: PropTypes.bool,
    /** Closes non multiple DropDowns when clicking a child */
    closeOnClick: PropTypes.bool,
    onClose: PropTypes.func,
    onApply: PropTypes.func
  };

  static defaultProps = {
    applyLabel: 'Apply selection',
    className: '',
    multiple: false,
    closeOnClick: true,
    onClose: () => {},
    onApply: () => {}
  };

  state = {
    direction: 'right'
  };

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    document.addEventListener('click', this.handleClickOutside, true);
    const position = this.node.getBoundingClientRect();
    if (position.left < 0) {
      this.setState({ direction: 'right' });
    } else if (position.right > window.innerWidth) {
      this.setState({ direction: 'left' });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClick = event => {
    if (!this.shouldCloseOnClick(event)) return;
    event.stopPropagation();
    this.close();
  };

  handleClickOutside = event => {
    if (!this.node.contains(event.target)) {
      event.preventDefault();
      event.stopPropagation();
      this.close();
    }
  };

  handleApply = () => {
    this.props.onApply();
  };

  shouldCloseOnClick(event) {
    return this.props.closeOnClick && !this.props.multiple && this.node !== event.target;
  }

  close() {
    this.props.onClose();
  }

  buildClassName() {
    return [
      'ds-mol-dropdown',
      'ds-mol-popover',
      `${this.state.direction}-direction`,
      this.props.className
    ].join(' ');
  }

  render() {
    return (
      <div
        ref={el => {
          this.node = el;
        }}
        className={this.buildClassName()}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex={0}
      >
        {this.props.children}
        {this.props.multiple && (
          <DropDownCell>
            <Selectable
              label={this.props.applyLabel}
              value="apply"
              onSelect={this.handleApply}
              classNames={['ds-atom-dialog-cell', 'multiple-apply']}
            />
          </DropDownCell>
        )}
      </div>
    );
  }
}

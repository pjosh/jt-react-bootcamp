import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import IconSvg from 'DesignSystemComponents/atoms/IconSvg';

export default class Tooltip extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clear: PropTypes.bool,
    children: PropTypes.node,
    localSource: PropTypes.bool,
    positionX: PropTypes.number,
    positionY: PropTypes.number,
    show: PropTypes.bool,
    tooltipInfo: PropTypes.any.isRequired
  };

  static defaultProps = {
    className: '',
    clear: false,
    children: null,
    localSource: false,
    positionX: 10,
    positionY: 25,
    show: true
  };

  state = {
    showTooltip: false,
    slotPositionX: 0,
    slotPositionY: 0
  };

  showTooltip = ev => {
    const slot = ev.target;
    const slotPosition = slot.getBoundingClientRect();

    this.setState({
      showTooltip: true,
      slotPositionX: slotPosition.x,
      slotPositionY: slotPosition.y
    });
  };

  hideTooltip = () => {
    this.setState({ showTooltip: false });
  };

  createTooltip() {
    if (!this.props.show || !this.state.showTooltip) return null;
    const left = `${window.scrollX + this.state.slotPositionX - this.props.positionX}px`;
    const top = `${window.scrollY + this.state.slotPositionY + this.props.positionY}px`;

    return (
      <span
        style={{ left, top }}
        className={`ds-tooltip ${this.props.className} ${this.props.clear ? 'clear' : ''}`}
      >
        {this.props.tooltipInfo}
      </span>
    );
  }

  render() {
    return (
      <span
        className={`ds-tooltip-container ${this.props.className}`}
        onMouseOver={ev => this.showTooltip(ev)}
        onFocus={ev => this.showTooltip(ev)}
        onMouseLeave={ev => this.hideTooltip(ev)}
        onBlur={ev => this.hideTooltip(ev)}
      >
        {this.props.children ? (
          this.props.children
        ) : (
          <IconSvg
            className={`ds-tooltip-trigger-icon ${this.props.className}`}
            icon="info"
            localSource={this.props.localSource}
          />
        )}

        {ReactDOM.createPortal(this.createTooltip() || [], document.body)}
      </span>
    );
  }
}

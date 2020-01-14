import React from 'react';
import PropTypes from 'prop-types';
import 'DesignSystem/styles/atoms';
import iconsSvg from 'DesignSystem/images/icons.svg';

export default class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    destructive: PropTypes.bool,
    working: PropTypes.bool,
    secondary: PropTypes.bool,
    small: PropTypes.bool,
    tiny: PropTypes.bool,
    onSelect: PropTypes.func,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    className: '',
    disabled: false,
    destructive: false,
    working: false,
    secondary: false,
    small: false,
    tiny: false,
    onSelect: () => {}
  };

  spinner = props => {
    if (props.tiny) {
      return (
        <React.Fragment>
          <span className="ds-atom-btn-content">{this.props.children}</span>
          <span className="ds-atom-btn-spinner">
            <title>Loading</title>
            <span className="ds-atom-btn-spinner-dot">
              <svg className="icon">
                <use xlinkHref={`${iconsSvg}#ic-dot`} />
              </svg>
            </span>
            <span className="ds-atom-btn-spinner-dot">
              <svg className="icon">
                <use xlinkHref={`${iconsSvg}#ic-dot`} />
              </svg>
            </span>
            <span className="ds-atom-btn-spinner-dot">
              <svg className="icon">
                <use xlinkHref={`${iconsSvg}#ic-dot`} />
              </svg>
            </span>
          </span>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <span className="ds-atom-btn-content">{this.props.children}</span>
        <svg className="ds-atom-btn-spinner-circle">
          <title>Loading</title>
          <use xlinkHref={`${iconsSvg}#ic-spinner`} />
        </svg>
      </React.Fragment>
    );
  };

  calculateClassName = () => {
    const variant = this.props.secondary ? 'secondary' : 'primary';
    const working = this.props.working ? 'working' : '';
    let mainClassName;
    if (this.props.small) {
      mainClassName = this.props.destructive
        ? `ds-atom-btn-small-${variant}-destructive-normal`
        : `ds-atom-btn-small-${variant}-normal`;
    } else if (this.props.tiny) {
      mainClassName = this.props.destructive
        ? `ds-atom-btn-tiny-${variant}-destructive-normal`
        : `ds-atom-btn-tiny-${variant}-normal`;
    } else {
      mainClassName = this.props.destructive
        ? `ds-atom-btn-${variant}-destructive-normal`
        : `ds-atom-btn-${variant}-normal`;
    }
    return `${this.props.className} ${mainClassName} ${working}`;
  };

  handleClick = event => {
    event.preventDefault();
    if (!this.props.working) this.props.onSelect();
  };

  render() {
    const classes = this.calculateClassName();
    return (
      <button
        type="button"
        className={classes}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
        {this.props.working ? this.spinner(this.props) : this.props.children}
      </button>
    );
  }
}

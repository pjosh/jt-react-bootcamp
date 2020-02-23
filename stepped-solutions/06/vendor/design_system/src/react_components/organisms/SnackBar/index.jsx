import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Fixed from './fixed';

export default class SnackBar extends React.PureComponent {
  static Fixed = Fixed;

  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onDismiss: PropTypes.func
  };

  static defaultProps = {
    className: '',
    error: false,
    onDismiss: () => {}
  };

  state = {
    visible: true
  };

  componentDidMount() {
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = window.setTimeout(this.handleDismiss, 4000);
  }

  handleDismiss = () => {
    window.clearTimeout(this.timer);
    this.setState({ visible: false });
    this.props.onDismiss();
  };

  render() {
    const className = `${this.props.className} dynamic`;
    const fixedProps = { ...this.props, className, onDismiss: this.handleDismiss };
    return (
      <CSSTransitionGroup
        transitionName="transition"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={700}
      >
        {this.state.visible && <Fixed {...fixedProps} />}
      </CSSTransitionGroup>
    );
  }
}

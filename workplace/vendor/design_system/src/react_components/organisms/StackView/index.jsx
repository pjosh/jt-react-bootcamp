import React from 'react';
import PropTypes from 'prop-types';

import iconsSvg from 'DesignSystem/images/icons.svg';

const escapeKey = 27;

export default class StackView extends React.PureComponent {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    footer: PropTypes.node,
    onClose: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    children: null,
    footer: null,
    className: '',
    onClose: () => {}
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey, false);
  }

  handleEscKey = event => {
    if (event.keyCode === escapeKey) {
      this.handleClose(event);
    }
  };

  handleClose = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onClose();
  };

  render() {
    const { title, children, footer } = this.props;
    return (
      <aside className={`ds-stackview ${this.props.className}`}>
        <div className="title">
          <button type="button" className="close" onClick={this.handleClose}>
            <svg className="close-stack-view-icon">
              <use className="close-stack-view-icon-content" xlinkHref={`${iconsSvg}#ic-cross`} />
            </svg>
          </button>
          {title}
        </div>
        <div className="content">{children}</div>
        {footer && <div className="footer">{footer}</div>}
      </aside>
    );
  }
}

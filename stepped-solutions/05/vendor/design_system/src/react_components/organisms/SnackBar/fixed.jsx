import React from 'react';
import PropTypes from 'prop-types';
import iconsSvg from 'DesignSystem/images/icons.svg';

export default class Fixed extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onDismiss: PropTypes.func.isRequired
  };

  static defaultProps = {
    error: false,
    className: ''
  };

  render() {
    const { title, children, className, error } = this.props;
    return (
      <div className={`ds-org-snack-bar ${className} ${error ? 'error' : ''}`}>
        <button type="button" className="dismiss" onClick={this.props.onDismiss}>
          <svg className="close-snack-bar-icon">
            <use className="close-snack-bar-icon-content" xlinkHref={`${iconsSvg}#ic-cross`} />
          </svg>
        </button>
        <div className="title">{title}</div>
        <div className="message">{children}</div>
      </div>
    );
  }
}

import React from 'react';
import Button from 'DesignSystemComponents/atoms/Button';
import PropTypes from 'prop-types';
import IconSvg from 'DesignSystemComponents/atoms/IconSvg';

export default class Fav extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    localSource: PropTypes.bool,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    className: '',
    disabled: false,
    localSource: false,
    onSelect: () => {}
  };

  handleClick = event => {
    event.preventDefault();
    this.props.onSelect();
  };

  render() {
    const buttonProps = {
      ...this.props,
      className: `ds-atom-fav-primary-normal ${this.props.className}`
    };

    return (
      <Button {...buttonProps}>
        <IconSvg localSource={this.props.localSource} icon={this.props.icon} />
      </Button>
    );
  }
}

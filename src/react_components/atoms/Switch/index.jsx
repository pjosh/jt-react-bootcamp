import React from 'react';
import PropTypes from 'prop-types';

export default class Switch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    className: '',
    name: '',
    checked: false,
    onChange: () => {}
  };

  state = {
    checked: this.props.checked
  };

  handleChange = e => {
    this.setState({
      checked: e.target.checked
    });
    this.props.onChange(e.target.checked);
  };

  render() {
    return (
      <label
        htmlFor="switch"
        className={`ds-atom-switch rounded ${this.props.className} ${
          this.state.checked ? 'selected' : ''
        }`}
      >
        <input
          id="switch"
          type="checkbox"
          className="hidden"
          checked={this.state.checked ? 'checked' : ''}
          name={this.props.name}
          onChange={this.handleChange}
        />
        <span className="ds-atom-switch-slider rounded" />
      </label>
    );
  }
}

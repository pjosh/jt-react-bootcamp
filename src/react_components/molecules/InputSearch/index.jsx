import React from 'react';
import PropTypes from 'prop-types';
import 'DesignSystem/styles/atoms';
import iconsSvg from 'DesignSystem/images/icons.svg';
import DropDown from 'DesignSystemComponents/molecules/DropDown';

export default class InputSearch extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    suggestions: PropTypes.instanceOf(Array),
    onSelect: PropTypes.func
  };

  static defaultProps = {
    className: '',
    error: false,
    placeholder: 'Search',
    suggestions: [],
    onSelect: () => {}
  };

  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ''
  };

  handleChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  handleSubmit = () => {
    if (this.props.onSelect) {
      this.props.onSelect(this.state.userInput);
    }
  };

  handleClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  handleKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13 || e.keyCode === 9) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
      this.props.onSelect(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  buildClassName() {
    return ['ds-atom-search-input-normal', this.props.error ? 'error' : '', this.props.className]
      .filter(klass => klass !== null)
      .join(' ');
  }

  render() {
    const className = this.buildClassName();
    const inputProps = { ...this.props, className };
    delete inputProps.error;
    let suggestionsListComponent;

    if (this.state.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <DropDown className="ds-atom-search-suggestions-list">
            {this.state.filteredSuggestions.map((suggestion, index) => (
              <option
                className={`ds-atom-dialog-cell ${
                  index === this.state.activeSuggestion ? 'active' : ''
                }`}
                key={suggestion}
                onClick={this.handleClick}
              >
                {suggestion}
              </option>
            ))}
          </DropDown>
        );
      }
    }
    return (
      <div className={`ds-atom-search-input-container ${this.props.className}`}>
        <input
          {...inputProps}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder={this.props.placeholder ? this.props.placeholder : this.state.placeholder}
          type="text"
          value={this.state.userInput}
        />
        <button
          type="button"
          className={`ds-atom-search-button ${this.state.userInput ? 'selected' : ''}`}
          onClick={this.handleSubmit}
        >
          <svg className="ds-atom-search-icon">
            <use xlinkHref={`${iconsSvg}#ic-lens`} />
          </svg>
        </button>
        {suggestionsListComponent}
      </div>
    );
  }
}

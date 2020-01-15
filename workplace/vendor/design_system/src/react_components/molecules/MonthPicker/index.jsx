import React from 'react';
import PropTypes from 'prop-types';
import iconsSvg from 'DesignSystem/images/icons.svg';

export default class MonthPicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func,
    selected: PropTypes.instanceOf(Date),
    year: PropTypes.number
  };

  static defaultProps = {
    className: '',
    onSelect: () => {},
    selected: new Date(),
    year: new Date().getFullYear()
  };

  state = {
    year: this.props.year
  };

  handlePreviousClick = () => {
    this.setState(prevState => ({
      year: parseInt(prevState.year, 10) - 1
    }));
  };

  handleNextClick = () => {
    this.setState(prevState => ({
      year: parseInt(prevState.year, 10) + 1
    }));
  };

  selectMonth = e => {
    const month = e.target.innerText;
    const date = new Date(`${month} 01 ${this.state.year}`);
    this.props.onSelect(date);
  };

  isSelected(monthName) {
    return monthName === this.props.selected.toLocaleString('en-us', { month: 'short' });
  }

  render() {
    const header = (
      <div className="ds-mol-month-picker-header">
        <button type="button" className="ds-arrow-left" onClick={this.handlePreviousClick}>
          <svg className="ds-atom-option-picker-icon dm_icon arrow">
            <use xlinkHref={`${iconsSvg}#ic-arrow`} />
          </svg>
        </button>
        <div className="ds-mol-month-picker-year">{this.state.year}</div>
        <button type="button" className="ds-arrow-right" onClick={this.handleNextClick}>
          <svg className="ds-atom-option-picker-icon dm_icon arrow">
            <use xlinkHref={`${iconsSvg}#ic-arrow`} />
          </svg>
        </button>
      </div>
    );

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const cells = months.map(monthName => (
      <div
        className={`ds-mol-month-picker-month ${this.isSelected(monthName) ? 'selected' : ''}`}
        key={monthName}
      >
        {monthName}
      </div>
    ));

    return (
      <div className={`ds-mol-month-picker-container ${this.props.className}`}>
        {header}
        <div
          className="ds-mol-month-picker"
          role="button"
          tabIndex={0}
          onClick={this.selectMonth}
          onKeyDown={this.selectMonth}
        >
          {cells}
        </div>
      </div>
    );
  }
}

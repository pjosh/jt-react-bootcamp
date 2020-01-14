import React from 'react';
import { shallow } from 'enzyme';
import MonthPicker from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/ic-arrow.svg', () => 'some_path/ic-arrow.svg');

describe('MonthPicker', () => {
  const defaultProps = {
    year: 2019,
    selected: new Date('2019-01-16')
  };

  const component = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <MonthPicker {...combinedProps} />;
  };

  const instance = props => shallow(component(props));

  it('renders a div with the class "ds-mol-month-picker-container"', () => {
    const monthPicker = instance();

    expect(monthPicker.find('.ds-mol-month-picker-container')).toHaveLength(1);
  });

  it('shows the year that recives by props', () => {
    const monthPicker = shallow(<MonthPicker year={2021} />);

    expect(monthPicker.find('.ds-mol-month-picker-year').text()).toEqual('2021');
  });

  it('shows twuelve months being text of first Jan and last Dec', () => {
    const monthPicker = shallow(<MonthPicker />);

    expect(monthPicker.find('.ds-mol-month-picker-month')).toHaveLength(12);
    expect(monthPicker.find('.ds-mol-month-picker-month:first-child').text()).toEqual('Jan');
    expect(monthPicker.find('.ds-mol-month-picker-month:last-child').text()).toEqual('Dec');
  });
});

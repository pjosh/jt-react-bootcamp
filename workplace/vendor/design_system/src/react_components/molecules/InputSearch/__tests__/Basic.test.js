import React from 'react';
import { shallow } from 'enzyme';
import InputSearch from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/icons.svg', () => 'some_path/icons.svg');

describe('InputSearch Basics', () => {
  const defaultProps = {};
  const instance = props => shallow(<InputSearch {...props} />);

  it('is styled by default', () => {
    const container = instance(defaultProps).find('input');
    expect(container.hasClass('ds-atom-search-input-normal')).toBeTruthy();
  });

  it('is styled different when is error', () => {
    const container = instance({ ...defaultProps, error: true }).find('input');
    expect(container.hasClass('error')).toBeTruthy();
  });

  it('keeps having default style when is error', () => {
    const container = instance({ ...defaultProps, error: true }).find('input');
    expect(container.hasClass('ds-atom-search-input-normal')).toBeTruthy();
  });

  it('accepts classes from its parent and gets new style', () => {
    const container = instance({ ...defaultProps, className: 'other-class' }).find('input');
    expect(container.hasClass('other-class')).toBeTruthy();
  });

  it('opens the dropdown clicking on the search bar and shows same number of option than are in array', () => {
    const suggestions = ['Abibliophobia', 'Taradiddle', 'Cattywampus'];
    const container = instance({ ...defaultProps, suggestions });

    container.find('input').simulate('change', { currentTarget: { value: 'a' } });

    expect(container.instance(defaultProps).state.showSuggestions).toBeTruthy();
    expect(container.find('option')).toHaveLength(3);
  });

  it('shows the number of options that match when filter by a letter', () => {
    const suggestions = ['Abibliophobia', 'Taradiddle', 'Cattywampus'];
    const container = instance({ ...defaultProps, suggestions });

    container.find('input').simulate('change', { currentTarget: { value: 'w' } });

    expect(container.find('option')).toHaveLength(1);
  });
});

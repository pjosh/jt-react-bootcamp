import React from 'react';
import { shallow } from 'enzyme';
import Option from '..';

describe('Option', () => {
  const onSelectMock = jest.fn();
  const defaultProps = {
    label: 'Option X',
    onSelect: onSelectMock,
    value: 'option-x'
  };
  const instance = props => shallow(<Option {...props} />);

  it('wraps a Selectable', () => {
    const item = instance(defaultProps).find('Selectable');
    expect(item).toHaveLength(1);
  });

  it('adds the "filter-menu-dropdown-list-link" class to the Selectable', () => {
    const item = instance(defaultProps).find('Selectable');
    expect(item.props().classNames).toContain('ds-filter-menu-dropdown-list-link');
  });

  it('adds the given classNames to the Selectable', () => {
    const item = instance({ ...defaultProps, classNames: ['given', 'class'] }).find('Selectable');
    expect(item.props().classNames).toContain('given');
    expect(item.props().classNames).toContain('class');
  });
});

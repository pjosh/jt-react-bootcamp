import React from 'react';
import { shallow } from 'enzyme';
import Option from '..';

describe('Selectable', () => {
  const onSelectMock = jest.fn();
  const defaultProps = {
    label: 'Option X',
    onSelect: onSelectMock,
    value: 'option-x'
  };
  const instance = props => shallow(<Option {...props} />);

  it('show the title', () => {
    const item = instance(defaultProps).find('button');
    expect(item.text()).toEqual('Option X');
  });

  it('is marked as selected', () => {
    const item = instance(Object.assign(defaultProps, { selected: true })).find('button');
    expect(item.hasClass('selected')).toBeTruthy();
  });

  it('can be selected', () => {
    instance(defaultProps)
      .find('button')
      .simulate('click', { preventDefault: () => {} });
    expect(onSelectMock).toHaveBeenCalledWith('option-x', 'Option X');
  });

  it('can be customized with extra class names', () => {
    const item = instance(Object.assign(defaultProps, { classNames: ['x', 'other-class'] }));
    expect(item.hasClass('other-class')).toBeTruthy();
    expect(item.hasClass('x')).toBeTruthy();
  });
});

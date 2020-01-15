import React from 'react';
import { shallow } from 'enzyme';
import Switch from '..';

describe('Switch', () => {
  const defaultProps = {
    name: 'SwitchTest'
  };

  const component = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <Switch {...combinedProps} />;
  };

  const instance = props => shallow(component(props));

  it('renders a switch', () => {
    const item = instance();

    expect(item.find('.ds-atom-switch')).toHaveLength(1);
  });

  it('can get checked by props', () => {
    const item = instance({ checked: true }).find('.ds-atom-switch');

    expect(item.find('input').prop('checked')).toBe('checked');
  });

  it('accepts classes from its parent and gets new style', () => {
    const item = instance({ ...defaultProps, className: 'other-class' });
    expect(item.hasClass('other-class')).toBeTruthy();
  });
});

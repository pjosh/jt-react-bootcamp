import React from 'react';
import { shallow, mount } from 'enzyme';
import ActionButton from '..';

describe('ActionButton', () => {
  const defaultProps = { title: 'Some title' };
  const instance = props => shallow(<ActionButton {...props} />);

  it('shows the title', () => {
    const item = instance({ title: 'Add' }).find('button');
    expect(item.text()).toEqual('Add');
  });

  it('shows child content before title', () => {
    const item = shallow(<ActionButton title="TITLE">prefix</ActionButton>).find('button');
    expect(item.text()).toEqual('prefixTITLE');
  });

  it('shows an icon when its provided', () => {
    const button = props => mount(<ActionButton {...props} />);
    const props = { ...defaultProps, icon: 'destroy' };
    const item = button(props).find('span');
    expect(item.props().className).toContain('sprite-icon-destroy');
  });

  it('can be disabled', () => {
    const props = { ...defaultProps, disabled: true };
    const item = instance(props).find('.ds-mol-option-picker-trigger');
    expect(item.hasClass('disabled')).toEqual(true);
  });

  it('shows no dropdown arrow by default', () => {
    const item = instance(defaultProps).find('button');
    expect(item.hasClass('no-arrow')).toEqual(true);
  });
});

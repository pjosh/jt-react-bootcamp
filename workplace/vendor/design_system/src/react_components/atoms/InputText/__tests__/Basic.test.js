import React from 'react';
import { shallow } from 'enzyme';
import InputText from '..';

describe('InputText Basics', () => {
  const defaultProps = {};
  const instance = props => shallow(<InputText {...props} />);

  it('is styled by default', () => {
    const item = instance(defaultProps);
    expect(item.hasClass('ds-atom-text-input-normal')).toBeTruthy();
  });

  it('is styled different when is error', () => {
    const item = instance({ ...defaultProps, error: true });
    expect(item.hasClass('error')).toBeTruthy();
  });

  it('keeps having default style when is error', () => {
    const item = instance({ ...defaultProps, error: true });
    expect(item.hasClass('ds-atom-text-input-normal')).toBeTruthy();
  });

  it('accepts classes from its parent and gets new style', () => {
    const item = instance({ ...defaultProps, className: 'other-class' });
    expect(item.hasClass('other-class')).toBeTruthy();
  });
});

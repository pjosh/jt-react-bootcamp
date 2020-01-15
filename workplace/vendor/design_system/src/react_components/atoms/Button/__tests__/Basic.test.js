import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/icons.svg', () => 'some_path/icons.svg');

describe('Button Basics', () => {
  const defaultProps = {};
  const instance = props => shallow(<Button {...props}>Click me!</Button>);

  it('shows the text', () => {
    const item = instance(defaultProps);
    expect(item.text()).toEqual('Click me!');
  });

  it('shows a spinner when is working', () => {
    const item = instance({ ...defaultProps, working: true });
    expect(item.exists('.ds-atom-btn-spinner-circle')).toBeTruthy();
  });

  it('shows a different spinner when is working and tinny', () => {
    const item = instance({ ...defaultProps, tiny: true, working: true });
    expect(item.exists('.ds-atom-btn-spinner')).toBeTruthy();
  });

  it('does nothing when the button is clicked and no handler is provided', () => {
    const eventPreventionMock = jest.fn();
    const item = instance(defaultProps);
    item.simulate('click', { preventDefault: eventPreventionMock });
    expect(eventPreventionMock).toHaveBeenCalled();
  });

  it('calls onSelect when the button is clicked', () => {
    const onSelectMock = jest.fn();
    const eventPreventionMock = jest.fn();
    const item = instance({ ...defaultProps, onSelect: onSelectMock });
    item.simulate('click', { preventDefault: eventPreventionMock });
    expect(onSelectMock).toHaveBeenCalled();
    expect(eventPreventionMock).toHaveBeenCalled();
  });

  it('does not call onSelect when the button is working', () => {
    const onSelectMock = jest.fn();
    const eventPreventionMock = jest.fn();
    const item = instance({ ...defaultProps, working: true, onSelect: onSelectMock });
    item.simulate('click', { preventDefault: eventPreventionMock });
    expect(onSelectMock).not.toHaveBeenCalled();
    expect(eventPreventionMock).toHaveBeenCalled();
  });

  it('is styled by default', () => {
    const item = instance(defaultProps);
    expect(item.hasClass('ds-atom-btn-primary-normal')).toBeTruthy();
  });

  it('is styled different when is secondary', () => {
    const item = instance({ ...defaultProps, secondary: true });
    expect(item.hasClass('ds-atom-btn-secondary-normal')).toBeTruthy();
  });

  it('is styled different when is destructive', () => {
    const item = instance({ ...defaultProps, destructive: true });
    expect(item.hasClass('ds-atom-btn-primary-destructive-normal')).toBeTruthy();
  });

  it('is styled different when is small', () => {
    const item = instance({ ...defaultProps, small: true });
    expect(item.hasClass('ds-atom-btn-small-primary-normal')).toBeTruthy();
  });

  it('is styled different when is small and destructive', () => {
    const item = instance({ ...defaultProps, small: true, destructive: true });
    expect(item.hasClass('ds-atom-btn-small-primary-destructive-normal')).toBeTruthy();
  });

  it('is styled different when is tiny', () => {
    const item = instance({ ...defaultProps, tiny: true });
    expect(item.hasClass('ds-atom-btn-tiny-primary-normal')).toBeTruthy();
  });

  it('is styled different when is tiny and destructive', () => {
    const item = instance({ ...defaultProps, tiny: true, destructive: true });
    expect(item.hasClass('ds-atom-btn-tiny-primary-destructive-normal')).toBeTruthy();
  });

  it('accepts classes from its parent and gets new style', () => {
    const item = instance({ ...defaultProps, className: 'facebook-btn' });
    expect(item.hasClass('facebook-btn')).toBeTruthy();
  });
});

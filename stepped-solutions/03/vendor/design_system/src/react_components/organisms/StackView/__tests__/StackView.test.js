import React from 'react';
import { shallow, mount } from 'enzyme';
import StackView from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/icons.svg', () => 'some_path/icons.svg');

describe('StackView', () => {
  const defaultProps = {
    title: 'some title'
  };

  const component = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <StackView {...combinedProps} />;
  };

  const instance = props => shallow(component(props));

  it('has the ds-stackview class', () => {
    const panel = instance(defaultProps);
    expect(panel.prop('className')).toContain('ds-stackview');
  });

  it('has the ds-stackview class plus those given as className prop', () => {
    const panel = instance({ ...defaultProps, className: 'some other classes' });
    const classes = panel.prop('className').split(' ');
    expect(classes).toContain('ds-stackview');
    expect(classes).toContain('some');
    expect(classes).toContain('other');
    expect(classes).toContain('classes');
  });

  it('shows the title in a header', () => {
    const panel = instance({ title: 'TEST TITLE' });
    expect(panel.text()).toEqual('TEST TITLE');
  });

  it('shows the title in a header when it is a complex node', () => {
    const complexTitle = [
      React.createElement('button', { key: 1, className: 'test', type: 'button' }, 'click me'),
      ' now'
    ];
    const panel = instance({ title: complexTitle });
    expect(panel.find('button.test')).toHaveLength(1);
    expect(panel.text()).toEqual('click me now');
  });

  it('triggers onClose & stops the event when closing with the X button', () => {
    const onClose = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const panel = instance({ onClose });
    const closeButton = panel.find('button.close');
    closeButton.simulate('click', event);
    expect(onClose).toHaveBeenCalledWith();
    expect(event.preventDefault).toHaveBeenCalledWith();
    expect(event.stopPropagation).toHaveBeenCalledWith();
  });

  it('triggers onClose & stops the event when pressing ESC', () => {
    const onClose = jest.fn();
    const event = new KeyboardEvent('keydown', { keyCode: 27 });
    mount(component({ onClose }));
    document.dispatchEvent(event);
    expect(onClose).toHaveBeenCalledWith();
  });
});

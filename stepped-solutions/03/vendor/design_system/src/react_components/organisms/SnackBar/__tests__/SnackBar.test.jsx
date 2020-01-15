import React from 'react';
import { mount } from 'enzyme';
import SnackBar from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/icons.svg', () => 'some_path/icons.svg');

describe('SnackBar', () => {
  const defaultProps = {
    title: 'some title',
    children: (
      <React.Fragment>
        <p>some text</p>
        <p>some more text</p>
      </React.Fragment>
    )
  };

  const component = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <SnackBar {...combinedProps} />;
  };

  it('has the ds-org-snack-bar class', () => {
    const panel = mount(component());
    expect(panel.find('SnackBar Fixed > div').prop('className')).toContain('ds-org-snack-bar');
  });

  it('has the dynamic class', () => {
    const panel = mount(component());
    expect(panel.find('SnackBar Fixed > div').prop('className')).toContain('dynamic');
  });

  it('does not have the error class by default', () => {
    const panel = mount(component());
    expect(panel.find('SnackBar Fixed > div').prop('className')).not.toContain('error');
  });

  it('has the error class when given the error prop', () => {
    const panel = mount(component({ error: true }));
    expect(panel.find('SnackBar Fixed > div').prop('className')).toContain('error');
  });

  it('includes a CSSTransitionGroup with the same timeouts as the CSS transtions', () => {
    const panel = mount(component());
    const transitionGroup = panel.find('CSSTransitionGroup');
    expect(transitionGroup.prop('transitionName')).toEqual('transition');
    expect(transitionGroup.prop('transitionAppear')).toEqual(true);
    expect(transitionGroup.prop('transitionAppearTimeout')).toEqual(500);
    expect(transitionGroup.prop('transitionEnter')).toEqual(false);
    expect(transitionGroup.prop('transitionLeave')).toEqual(true);
    expect(transitionGroup.prop('transitionLeaveTimeout')).toEqual(700);
  });

  it('removes the Fixed snackbar on dismiss', () => {
    const panel = mount(component());
    const dismissButton = panel.find('button.dismiss');
    expect(panel.find('Fixed')).toHaveLength(1);
    dismissButton.simulate('click');
    expect(panel.state('visible')).toEqual(false);
    expect(panel.render().find('Fixed')).toHaveLength(0);
  });

  it('triggers the dismiss callback', () => {
    const onDismiss = jest.fn();
    const panel = mount(component({ onDismiss }));
    panel.find('button.dismiss').simulate('click');
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(onDismiss).toHaveBeenCalledWith();
  });
});

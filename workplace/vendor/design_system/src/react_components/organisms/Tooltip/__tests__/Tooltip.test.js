import React from 'react';
import { shallow, mount } from 'enzyme';
import Tooltip from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/icons.svg', () => 'some_path/icons.svg');

describe('Tooltip basic', () => {
  const defaultProps = {
    tooltipInfo: 'some title'
  };

  const component = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <Tooltip {...combinedProps} />;
  };

  const instance = props => shallow(component(props));
  const mountedInstance = props => mount(component(props));

  it('has the ds-tooltip-trigger class', () => {
    const container = instance();

    expect(container.find('.ds-tooltip-container')).toHaveLength(1);
  });

  it('has an info icon by default', () => {
    const container = instance();
    const icon = container.find('.ds-tooltip-container .ds-tooltip-trigger-icon');

    expect(icon).toHaveLength(1);
    expect(icon.props().icon).toEqual('info');
  });

  it('can get a text as children', () => {
    const children = 'Label';
    const container = instance({ children });

    expect(container.text()).toEqual('Label');
  });

  it('shows the tooltip on mouse over', () => {
    const container = mountedInstance();

    expect(container.find('.ds-tooltip')).toHaveLength(0);

    container.simulate('mouseover');

    expect(container.find('.ds-tooltip')).toHaveLength(1);

    container.simulate('mouseleave');

    expect(container.find('.ds-tooltip')).toHaveLength(0);
  });

  it('does not show the tooltip if show is false', () => {
    const container = mountedInstance({ show: false });

    expect(container.find('.ds-tooltip')).toHaveLength(0);

    container.simulate('mouseover');

    expect(container.find('.ds-tooltip')).toHaveLength(0);

    container.simulate('mouseleave');

    expect(container.find('.ds-tooltip')).toHaveLength(0);
  });

  it('shows the tooltip info that gets as prop', () => {
    const container = mountedInstance({});

    container.simulate('mouseover');

    expect(container.find('.ds-tooltip').text()).toEqual('some title');
  });
});

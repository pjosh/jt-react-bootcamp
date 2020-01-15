import React from 'react';
import { shallow, mount } from 'enzyme';

import BlankSlate from '..';
import imageDefaultRoute from 'DesignSystem/images/no-chats.png';

jest.mock('DesignSystem/images/no-chats.png', () => 'some_path/no-chats.png');

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock('DesignSystem/images/icons.svg', () => 'some_path/icons.svg');

/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
describe('<BlankSlate />', () => {
  const defaultProps = {
    onSelect: () => {},
    buttonLabel: 'Click here',
    title: 'The blank slate title',
    explanation: 'The blank slate explanation',
    imageRoute: imageDefaultRoute
  };

  const instance = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <BlankSlate {...combinedProps} />;
  };

  it('exists', () => {
    const container = shallow(instance({}));

    expect(container.find('.ds-org-blank-slate')).toHaveLength(1);
  });

  it('renders an image if passed imageRoute prop', () => {
    const container = shallow(instance({}));

    expect(container.find('.ds-org-blank-slate-image-container')).toHaveLength(1);
  });

  it('renders a div as image background if passed imageRoute prop as empty', () => {
    const container = shallow(instance({ imageRoute: 'empty' }));

    expect(container.find('.ds-org-blank-slate-image-container')).toHaveLength(0);
    expect(container.find('div.ds-org-blank-slate-background-image')).toHaveLength(1);
  });

  it('renders a title if passed as prop with The title blank slate as inner text', () => {
    const container = shallow(instance({}));

    expect(container.find('.ds-org-blank-slate-header')).toHaveLength(1);
    expect(container.find('.ds-org-blank-slate-header').text()).toEqual('The blank slate title');
  });

  it('renders a explanation if passed as prop with The blank slate explanation as inner text', () => {
    const container = shallow(instance({}));

    expect(container.find('.ds-org-blank-slate-paragraph')).toHaveLength(1);
    expect(container.find('.ds-org-blank-slate-paragraph').text()).toEqual(
      'The blank slate explanation'
    );
  });

  it('renders a button with the buttonLabel prop as inner text', () => {
    const container = mount(instance({}));
    const ctaButton = container.find('Button.ds-org-blank-slate-cta');

    expect(ctaButton).toHaveLength(1);
    expect(ctaButton.text()).toContain('Click here');
  });
});

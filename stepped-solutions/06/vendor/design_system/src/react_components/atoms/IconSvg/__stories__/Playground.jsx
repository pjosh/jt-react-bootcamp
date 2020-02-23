import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import IconSvg from 'DesignSystemComponents/atoms/IconSvg';

const storyFunc = () => (
  <IconSvg
    className={text('className', '', 'IconSvg')}
    localSource={boolean('localSource', false, 'IconSvg')}
    icon={text('icon', 'archive', 'IconSvg')}
  />
);

export default {
  title: 'IconSvg',
  render: storyFunc,
  text: `
  ## IconSvg

  This component is a wrapper to a standar svg element that alow us to pass any icon without 'ic-' that is in icons.svg file as prop and will render it. You can see then in Showcases Icons.
  
  You can also modify its style passing a *className* prop.  

  **IMPORTANT:** To avoid CORS policy in browsers, if you want to use this component from outside your project, you need to pass localSource prop as true and have icons.svg file imported in your html.
  `
};

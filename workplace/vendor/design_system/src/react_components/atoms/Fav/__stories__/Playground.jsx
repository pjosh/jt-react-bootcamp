import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import Fav from 'DesignSystemComponents/atoms/Fav';

const storyFunc = () => (
  <Fav
    className={text('className', '', 'Fav')}
    disabled={boolean('disabled', false, 'Fav')}
    icon={text('icon', 'archive', 'Fav')}
    localSource={boolean('localSource:', false)}
    onSelect={action('handleClick', '', 'Fav')}
  />
);

export default {
  title: 'Fav',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Fav button](https://zpl.io/bJOkmvx)

  This component is a composition between <Button> and <IconSvg> components. Inherits props of <Button>. 

  You need to pass it *icon* prop to render it. You can also modify its style passing a *className* prop. 
  
  **IMPORTANT:** As this component is a composition of <IconSvg> if you want to use this component from outside your project, to avoid CORS policy in browsers, you need to pass localSource prop and have icons.svg file imported in your html.  
  `
};

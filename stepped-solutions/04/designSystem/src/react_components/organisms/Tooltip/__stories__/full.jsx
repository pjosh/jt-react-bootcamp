import React from 'react';
import { text, boolean, number } from '@storybook/addon-knobs/react';
import Tooltip from '..';

const storyFunc = () => (
  <Tooltip
    clear={boolean('clear', true)}
    className={text('ClassName:', '')}
    localSource={boolean('localSource:', false)}
    positionX={number('positionX', 0)}
    positionY={number('positionY', 30)}
    tooltipInfo={text('Info:', 'Some info to show in the tooltip')}
    show={boolean('show', true)}
  >
    Label
  </Tooltip>
);

export default {
  title: 'Full example',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Tooltip](https://zpl.io/VOBpPE1)

  ## Notes
  The component has a show prop in case you need to show the tooltip in conditional cases.
  
  Also positionX and positionY props to position the tooltip easily.

  **IMPORTANT:** As this component is a composition of <IconSvg> if you want to use this component from outside your project, to avoid CORS policy in browsers, you need to pass localSource prop and have icons.svg file imported in your html.  
  `
};

import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import Tooltip from '..';

const storyFunc = () => {
  const tooltipInfo = text('tooltipInfo:', 'Some info to show in the tooltip');

  const props = { tooltipInfo };
  return <Tooltip {...props} />;
};

export default {
  title: 'Basic example',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Tooltip](https://zpl.io/VOBpPE1)
  
  ## Notes
  The component is composed by the trigger and the tooltip.
  By default the trigger is an info SvgIcon but you can pass any other element as children.
  The tooltipInfo is the only prop required.
  `
};

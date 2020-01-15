import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import Button from 'DesignSystemComponents/atoms/Button';

const storyFunc = () => (
  <Button
    className={text('className', '', 'Button')}
    destructive={boolean('destructive', false, 'Button')}
    disabled={boolean('disabled', false, 'Button')}
    onSelect={action('handleClick', '', 'Button')}
    secondary={boolean('secondary', false, 'Button')}
    small={boolean('small', false, 'Button')}
    tiny={boolean('tiny', false, 'Button')}
    working={boolean('working', false, 'Button')}
  >
    {text('text', 'Label')}
  </Button>
);

export default {
  title: 'Buttons',
  render: storyFunc,
  text: `
  # Button
  ## Zeplin
  * [Buttons](https://zpl.io/bJOkmvx)

  ## Notes
  This component needs children to be rendered, it can be a title, an icon or any other element that you figure out.
  `
};

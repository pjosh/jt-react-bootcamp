import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import Switch from 'DesignSystemComponents/atoms/Switch';

const storyFunc = () => (
  <Switch
    className={text('className', '', 'switch')}
    checked={boolean('checked', false, 'switch')}
    name={text('name', '', 'switch')}
    onChange={action('handleClick', '', 'switch')}
  />
);

export default {
  title: 'Switch',
  render: storyFunc,
  text: `
# Switch
## Zeplin
* [Switches](https://zpl.io/VQop5rR)

## Notes
You also can modify its style passing a *className* prop.
  `
};

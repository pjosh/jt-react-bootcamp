import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import InputText from 'DesignSystemComponents/atoms/InputText';
// eslint-disable-next-line import/extensions
import './style.less';

const storyFunc = () => (
  <InputText
    className={text('className', '', 'Input Text')}
    error={boolean('error', false, 'Input Text')}
  />
);

export default {
  title: 'Input Text',
  text: `
  # InputText 
  ## Zeplin
  * [InputText ](https://zpl.io/bJOzRlr)

  ## Notes

  It can receive all props that a normal input can. You also can modify its style passing a *className* prop.`,
  render: storyFunc
};

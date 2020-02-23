import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';

const storyFunc = () => (
  <DropDownCell className={text('className', '', 'DropDownCell')}>Option 1</DropDownCell>
);

export default {
  title: 'Dropdown cell',
  render: storyFunc
};

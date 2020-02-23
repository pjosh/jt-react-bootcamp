import React from 'react';
import { action } from '@storybook/addon-actions';
import { date, number, text } from '@storybook/addon-knobs/react';
import MonthPicker from '..';

const storyFunc = () => {
  function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return new Date(stringTimestamp);
  }
  const onSelect = action('onSelect', () => {});
  const selected = myDateKnob('date', new Date());
  const year = number('Year:', 2019);
  const className = text('ClassName:', '');

  const props = { onSelect, selected, className, year };
  return <MonthPicker {...props} />;
};

export default {
  title: 'Basic example',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Month picker](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18ffdd6d876f24822770)`
};

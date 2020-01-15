import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';
import Select from '..';

const storyFunc = () => {
  const onChange = action('onChange', '', 'Simple Select');
  const error = boolean('error', false, 'Simple Select');
  const options = [{ value: '1', label: 'one' }, { value: '2', label: 'two' }];
  return <Select autoFocus onChange={onChange} options={options} error={error} />;
};

export default {
  title: 'Simple select',
  render: storyFunc,
  text: `
  # Simple Select
  ## Zeplin
  * [Form blocks](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18fe0bc236e05fef6fc2)

  ## React Select
  This component is a wrapper over [react-select](http://jedwatson.github.io/react-select/) So inherit props from it.
  `
};

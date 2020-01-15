import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import DropDown from '..';

const storyFunc = () => {
  const className = text('ClassName:', '');
  const onClose = action('onClose');
  const onApply = action('onApply');
  const onButtonClick = action('onButtonClick');
  return (
    <DropDown onClose={onClose} onApply={onApply} className={className}>
      <DropDownCell classNames={['with-button']}>
        <button type="button" onClick={onButtonClick}>
          First option
        </button>
      </DropDownCell>
      <DropDownCell classNames={['with-button']}>
        <button type="button" onClick={onButtonClick}>
          Another option
        </button>
      </DropDownCell>
    </DropDown>
  );
};

export default {
  title: 'Drop Down with buttons',
  render: storyFunc,
  text: `
  ## Zeplin
  * [PopOvers](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18ffdd6d876f24822770)
  `
};

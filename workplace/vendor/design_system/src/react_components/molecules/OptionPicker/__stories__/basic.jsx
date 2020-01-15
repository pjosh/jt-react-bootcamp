import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import DropDown from 'DesignSystemComponents/molecules/DropDown';
import OptionPicker from '..';

const storyFunc = () => {
  const onButtonClick = action('onButtonClick');
  const dropDown = (
    <DropDown>
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
  const arrow = boolean('arrow', true);
  const title = text('Title:', 'Pick one');
  const className = text('ClassName:', '');
  const icon = select(
    'Icon',
    ['download', 'reload', 'sign', 'export', 'action', null],
    'action',
    'ICONS'
  );
  const disabled = boolean('Disabled', false);
  const props = { title, icon, disabled, dropDown, className, arrow };
  return <OptionPicker {...props} />;
};

export default {
  title: 'Basic example',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Option Pickers](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18fd4c212f3d93be905f)
    provides the button design
  * [PopOvers](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18ffdd6d876f24822770)
    provides the drop down design. See also [DropDown with buttons](/?selectedKind=Molecules%2FDropDown&selectedStory=Drop%20Down%20with%20buttons)
    in storybook
  `
};

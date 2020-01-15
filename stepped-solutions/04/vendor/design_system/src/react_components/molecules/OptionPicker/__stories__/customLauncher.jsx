import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import DropDown from 'DesignSystemComponents/molecules/DropDown';
import Button from 'DesignSystemComponents/atoms/Button';
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
  const title = text('Title:', 'Pick one');
  const className = text('ClassName:', '');
  const icon = select(
    'Icon',
    ['download', 'reload', 'sign', 'export', 'action', null],
    'action',
    'ICONS'
  );
  const disabled = boolean('Disabled', false);
  const props = { title, icon, disabled, dropDown, className };
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <OptionPicker {...props}>
              <Button tiny>Button launcher</Button>
            </OptionPicker>
          </td>
          <td>
            <OptionPicker {...props}>
              <span>Plain launcher</span>
            </OptionPicker>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default {
  title: 'Custom picker',
  render: storyFunc,
  text: `
  Customize the component which launches the dropdown
  `
};

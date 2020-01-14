import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import Selectable from 'DesignSystemComponents/atoms/Selectable';
import DropDown from '..';

const storyFunc = () => {
  const className = text('ClassName:', '');
  const onSelect = action('onSelect');
  const onClose = action('onClose');
  const onApply = action('onApply');
  return (
    <DropDown multiple onClose={onClose} onApply={onApply} className={className}>
      <DropDownCell>
        <Selectable
          value="1"
          label="First option"
          selected
          onSelect={onSelect}
          classNames={['ds-atom-dialog-cell', 'multiple', 'for-check']}
        />
      </DropDownCell>
      <DropDownCell>
        <Selectable
          value="2"
          label="Second option"
          onSelect={onSelect}
          classNames={['ds-atom-dialog-cell', 'multiple', 'for-check']}
        />
      </DropDownCell>
    </DropDown>
  );
};

export default {
  title: 'Multiple select with selectable',
  text: `
  ## Zeplin
  * [PopOvers](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18ffdd6d876f24822770)

  ## Notes
  *\`Selectable\` is a controlled component*, which means that the state of the selection will not
  change on the Storybook.

  For an example of using this inside a _controller_ component, check \`FilterCriteria\`
  `,
  render: storyFunc
};

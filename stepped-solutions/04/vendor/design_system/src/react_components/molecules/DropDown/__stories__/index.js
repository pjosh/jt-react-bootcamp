import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import withButtons from './withButtons';
import multipleSelect from './multipleSelect';

const fullStory = story => story.render();

storiesOf('Molecules/DropDown', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo())
  .add(withButtons.title, () => fullStory(withButtons), {
    info: { inline: true, header: false, text: withButtons.text }
  })
  .add(multipleSelect.title, () => fullStory(multipleSelect), {
    info: { inline: true, header: false, text: multipleSelect.text }
  });

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import confirmModal from './confirmModal';

const fullStory = story => story.render();

storiesOf('Organisms/Modals', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      text: confirmModal.text
    })
  )
  .add(confirmModal.title, () => fullStory(confirmModal));

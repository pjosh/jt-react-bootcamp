import React from 'react';
import { array, boolean, text } from '@storybook/addon-knobs/react';
import Avatar from 'DesignSystemComponents/atoms/Avatar';
import imageDefaultRoute from 'DesignSystemImages/avatar-image-placeholder.svg';

const storyFunc = () => (
  <div>
    <Avatar
      className={text('className', '', 'Avatar')}
      showInitials={boolean('showInitials', true, 'Avatar')}
      size={text('size', 'small', 'Avatar')}
      persons={array(
        'persons',
        [
          { name: 'Jane Doe', imageRoute: 'janeDoe.svg' },
          { name: 'John Smith', imageRoute: 'johnSmith.svg' }
        ],
        'Avatar'
      )}
    />
    <br />
    <Avatar
      className={text('className', '', 'Avatar')}
      showInitials={boolean('showInitials', true, 'Avatar')}
      imageRoute={text('imageRoute', imageDefaultRoute, 'Avatar')}
      personName={text('personName', 'Jane Doe', 'Avatar')}
      size={text('size', 'small', 'Avatar')}
    />
  </div>
);

export default {
  title: 'Avatar',
  text: `
  # Avatars
  ## Zeplin
  * [Avatars](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18fbeae9e3ab0d93acec)
  
  ## Notes
    It can receive the info of the person by single props, *personName* and *imageRoute*,  or as an object, *persons = [{ name: Jane Doe, imageRoute: janeDoe.svg}]*. In case it was a group you could use *[{ name: Jane Doe, imageRoute: janeDoe.svg}, { name: John Smith, imageRoute: johnSmith.svg}]*
    
    In avatar component no prop is needed. By default shows default image. If has *imageRoute* shows this image. If has *personName* shows initials. If has *persons* shows the length of the array. You can also modify its style passing a *className* prop.
    `,
  render: storyFunc
};

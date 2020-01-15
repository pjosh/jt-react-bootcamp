import ReactDOMServer from 'react-dom/server';
import { withInfo } from '@storybook/addon-info';

export default (story, options = { full: true }) => {
  const extraOptions = options.full
    ? { source: true, propTables: [] }
    : { source: false, propTables: false, text: '' };
  let text = '';
  if (options.text) {
    ({ text } = options);
  } else {
    text = `
    # ${story.title}
    #### HTML generated code:

    ~~~js
    ${ReactDOMServer.renderToStaticMarkup(story.render())}
    ~~~
    `;
  }
  return withInfo({ header: false, inline: true, text, ...extraOptions })(story.render);
};

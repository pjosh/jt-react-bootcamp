import React from 'react';
import IconsSvg from 'DesignSystem/images/icons.svg';
import IconSvg from '../IconSvg';

const iconsListIds = (() => {
  const xmlhttp = new XMLHttpRequest();
  let ids;
  // eslint-disable-next-line func-names
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      ids = Array.from(this.responseXML.getElementsByTagName('symbol')).map(element =>
        element.id.replace('ic-', '')
      );
    }
  };
  xmlhttp.open('GET', IconsSvg, false);
  xmlhttp.send();
  return ids;
})();

const iconGroup = iconsListIds.map(icon => (
  <span className="icon-cell" key={icon}>
    <IconSvg className="icon" icon={icon} />
    <p className="icon-title">
      ic-
      {icon}
    </p>
  </span>
));

const icons = <section className="grid-container">{iconGroup}</section>;

const storyFunc = () => (
  <div className="showcase">
    <h1>
      Icons{' '}
      <a className="small" href="https://zpl.io/brkQXe7" target="zepplin">
        View in Zepplin
      </a>
    </h1>
    <h2>All our svg icons</h2>
    <hr />
    {icons}
  </div>
);

export default {
  text: 'You can choose any icon here. If is not here add it in our icons.svg file. :)',
  title: 'Icons',
  render: storyFunc
};

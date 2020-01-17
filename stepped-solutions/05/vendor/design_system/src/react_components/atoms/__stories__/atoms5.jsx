import React from 'react';
import Switch from 'DesignSystemComponents/atoms/Switch';

const switches = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th>Active(ON/OFF)</th>
      </tr>
      <tr>
        <td>
          <Switch name="Switch" checked />
        </td>
      </tr>
    </tbody>
  </table>
);

const storyFunc = () => (
  <div className="showcase">
    <h1>
      Switches{' '}
      <a className="small" href="https://zpl.io/VQop5rR" target="zepplin">
        View in Zepplin
      </a>
    </h1>
    <h2>Turn on!</h2>
    <hr />
    {switches}
  </div>
);

export default {
  title: 'Switches',
  render: storyFunc
};

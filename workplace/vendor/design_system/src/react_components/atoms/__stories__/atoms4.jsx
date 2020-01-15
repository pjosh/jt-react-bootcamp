import React from 'react';
import InputText from 'DesignSystemComponents/atoms/InputText';
import Select from 'DesignSystemComponents/atoms/Select';
import InputSearch from 'DesignSystemComponents/molecules/InputSearch';

const inputsText = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th>Normal</th>
        <th>Disabled</th>
        <th>Error</th>
      </tr>
      <tr>
        <td>
          <InputText placeholder="Placeholder" />
        </td>
        <td>
          <InputText disabled placeholder="Placeholder" />
        </td>
        <td>
          <InputText error placeholder="Placeholder" />
        </td>
      </tr>
    </tbody>
  </table>
);
const inputsSelect = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th>Normal</th>
        <th>Disabled</th>
        <th>Error</th>
      </tr>
      <tr>
        <td>
          <Select
            placeholder="Placeholder"
            options={[{ value: '1', label: 'one' }, { value: '2', label: 'two' }]}
          />
        </td>
        <td>
          <Select disabled placeholder="Placeholder" />
        </td>
        <td>
          <Select
            error
            placeholder="Placeholder"
            options={[{ value: '1', label: 'one' }, { value: '2', label: 'two' }]}
          />
        </td>
      </tr>
    </tbody>
  </table>
);
const inputsSearch = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th>Normal</th>
        <th>Disabled</th>
      </tr>
      <tr>
        <td>
          <InputSearch
            placeholder="Placeholder"
            options={[{ value: '1', label: 'one' }, { value: '2', label: 'two' }]}
          />
        </td>
        <td>
          <InputSearch disabled placeholder="Placeholder" />
        </td>
      </tr>
    </tbody>
  </table>
);
const storyFunc = () => (
  <div className="showcase">
    <h1>
      Input text{' '}
      <a className="small" href="https://zpl.io/bJOzRlr" target="zepplin">
        View in Zepplin
      </a>
    </h1>
    <h2>All states</h2>
    <hr />
    {inputsText}
    <h1>Input Select </h1>
    <h2>All states</h2>
    <hr />
    {inputsSelect}
    <h1>Input Search </h1>
    <h2>Perfect for your navigation bars</h2>
    <hr />
    {inputsSearch}
  </div>
);

export default {
  title: 'Inputs',
  render: storyFunc
};

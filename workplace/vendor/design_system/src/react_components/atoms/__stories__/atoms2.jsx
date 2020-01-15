import React from 'react';
import imageRoute from 'DesignSystemImages/worker.jpg';
import Avatar from 'DesignSystemComponents/atoms/Avatar';

const AvatarSquare = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th />
        <th>Filled</th>
        <th>Empty</th>
        <th>Initials</th>
        <th>Multiple</th>
        <th>Not on our DB</th>
      </tr>
      <tr>
        <th>Square 25</th>
        <td>
          <Avatar personName="Worker Name" size="tiny" imageRoute={imageRoute} />
        </td>
        <td>
          <Avatar personName="Worker Name" size="tiny" />
        </td>
        <td>
          <Avatar personName="Worker Name" size="tiny" showInitials />
        </td>
      </tr>
      <tr>
        <th>Oval 30</th>
        <td>
          <Avatar personName="Worker Name" size="small" imageRoute={imageRoute} />
        </td>
        <td>
          <Avatar personName="Worker Name" size="small" />
        </td>
        <td>
          <Avatar personName="Worker Name" size="small" showInitials />
        </td>
        <td>
          <Avatar personName="Worker Name" size="small" numberOfPersons={2} />
        </td>
      </tr>
      <tr>
        <th>Oval 45</th>
        <td>
          <Avatar personName="Worker Name" size="medium" imageRoute={imageRoute} />
        </td>
        <td>
          <Avatar personName="Worker Name" size="medium" />
        </td>
        <td>
          <Avatar personName="Worker Name" size="medium" showInitials />
        </td>
        <td />
        <td>
          <Avatar size="medium" showInitials />
        </td>
      </tr>
      <tr>
        <th>Oval 55</th>
        <td>
          <Avatar personName="Worker Name" size="big" imageRoute={imageRoute} />
        </td>
        <td>
          <Avatar personName="Worker Name" size="big" />
        </td>
        <td>
          <Avatar personName="Worker Name" size="big" showInitials />
        </td>
        <td />
        <td />
      </tr>
    </tbody>
  </table>
);

const storyFunc = () => (
  <div className="showcase">
    <h1>
      Avatars{' '}
      <a className="small" href="https://zpl.io/amByZGD" target="zepplin">
        View in Zepplin
      </a>
    </h1>
    <h2>Poker face</h2>
    <hr />
    {AvatarSquare}
  </div>
);

export default {
  title: 'Atoms 2',
  render: storyFunc
};

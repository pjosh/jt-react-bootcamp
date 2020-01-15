import React from 'react';
import Button from 'DesignSystemComponents/atoms/Button';
import Fav from 'DesignSystemComponents/atoms/Fav';

const regularSize = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th />
        <th>Normal</th>
        <th>Disabled</th>
        <th>Working</th>
      </tr>
      <tr>
        <th>Primary</th>
        <td>
          <Button>Label</Button>
        </td>
        <td>
          <Button disabled>Label</Button>
        </td>
        <td>
          <Button working>Label</Button>
        </td>
      </tr>
      <tr>
        <th>Primary destructive</th>
        <td>
          <Button destructive>Label</Button>
        </td>
        <td>
          <Button destructive disabled>
            Label
          </Button>
        </td>
        <td>
          <Button destructive working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary</th>
        <td>
          <Button secondary>Label</Button>
        </td>
        <td>
          <Button secondary disabled>
            Label
          </Button>
        </td>
        <td>
          <Button secondary working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary destructive</th>
        <td>
          <Button secondary destructive>
            Label
          </Button>
        </td>
        <td>
          <Button secondary destructive disabled>
            Label
          </Button>
        </td>
        <td>
          <Button secondary destructive working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Custom class</th>
        <td>
          <Button className="custom-class">Label</Button>
        </td>
        <td>
          <Button className="custom-class" disabled>
            Label
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
);

const smallSize = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th />
        <th>Normal</th>
        <th>Disabled</th>
        <th>Working</th>
      </tr>
      <tr>
        <th>Primary</th>
        <td>
          <Button small>Label</Button>
        </td>
        <td>
          <Button small disabled>
            Label
          </Button>
        </td>
        <td>
          <Button small working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Primary destructive</th>
        <td>
          <Button small destructive>
            Label
          </Button>
        </td>
        <td>
          <Button small destructive disabled>
            Label
          </Button>
        </td>
        <td>
          <Button small destructive working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary</th>
        <td>
          <Button secondary small>
            Label
          </Button>
        </td>
        <td>
          <Button secondary small disabled>
            Label
          </Button>
        </td>
        <td>
          <Button secondary small working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary destructive</th>
        <td>
          <Button secondary small destructive>
            Label
          </Button>
        </td>
        <td>
          <Button secondary small destructive disabled>
            Label
          </Button>
        </td>
        <td>
          <Button secondary small destructive working>
            Label
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
);

const tinySize = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th />
        <th>Normal</th>
        <th>Disabled</th>
        <th>Working</th>
      </tr>
      <tr>
        <th>Primary</th>
        <td>
          <Button tiny>Label</Button>
        </td>
        <td>
          <Button tiny disabled>
            Label
          </Button>
        </td>
        <td>
          <Button tiny working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Primary destructive</th>
        <td>
          <Button tiny destructive>
            Label
          </Button>
        </td>
        <td>
          <Button tiny destructive disabled>
            Label
          </Button>
        </td>
        <td>
          <Button tiny destructive working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary</th>
        <td>
          <Button secondary tiny>
            Label
          </Button>
        </td>
        <td>
          <Button secondary tiny disabled>
            Label
          </Button>
        </td>
        <td>
          <Button secondary tiny working>
            Label
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary destructive</th>
        <td>
          <Button secondary tiny destructive>
            Label
          </Button>
        </td>
        <td>
          <Button secondary tiny destructive disabled>
            Label
          </Button>
        </td>
        <td>
          <Button secondary tiny destructive working>
            Label
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
);

const FavButton = (
  <table className="showcase-table">
    <tbody>
      <tr>
        <th />
        <th>Normal</th>
        <th>Disabled</th>
      </tr>
      <tr>
        <th>Primary</th>
        <td>
          <Fav icon="archive" />
        </td>
        <td>
          <Fav icon="archive" disabled />
        </td>
      </tr>
    </tbody>
  </table>
);

const storyFunc = () => (
  <div className="showcase">
    <h1>
      Buttons{' '}
      <a className="small" href="https://zpl.io/bJOkmvx" target="zepplin">
        View in Zepplin
      </a>
    </h1>
    <h2>Regular size</h2>
    <hr />
    {regularSize}
    <h2>Small size</h2>
    <hr />
    {smallSize}
    <h2>Tiny size</h2>
    <hr />
    {tinySize}
    <h2>Fav</h2>
    <hr />
    {FavButton}
  </div>
);

export default {
  title: 'Buttons',
  render: storyFunc
};

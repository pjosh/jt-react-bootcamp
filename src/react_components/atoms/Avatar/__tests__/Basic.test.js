import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '..';

// loading the SVG breaks in the test renderer, so we mock it early
jest.mock(
  'DesignSystem/images/avatar-image-placeholder.svg',
  () => 'some_path/avatar-image-placeholder.svg'
);

describe('Avatar Basics', () => {
  const defaultProps = {};
  const instance = props => shallow(<Avatar {...props} />);

  it('is styled by default when it has any prop passed', () => {
    const item = instance(defaultProps);
    expect(item.hasClass('ds-atom-avatar-medium')).toBeTruthy();
  });

  it('is styled different when has prop size as tiny', () => {
    const item = instance({ ...defaultProps, size: 'tiny' });
    expect(item.hasClass('ds-atom-avatar-tiny')).toBeTruthy();
  });

  it('is styled different when has prop size as small', () => {
    const item = instance({ ...defaultProps, size: 'small' });
    expect(item.hasClass('ds-atom-avatar-small')).toBeTruthy();
  });

  it('is styled different when has prop showInitials true but has not personName', () => {
    const item = instance({ ...defaultProps, showInitials: true });
    expect(item.hasClass('ds-atom-avatar-unknown')).toBeTruthy();
  });

  it('shows an interrogation when has prop showInitials true but has not personName', () => {
    const item = instance({ ...defaultProps, showInitials: true });
    expect(item.text()).toEqual('?');
  });

  it('shows initials when has prop personName and showInitials as true', () => {
    const item = instance({ ...defaultProps, showInitials: true, personName: 'Amy wong' });
    expect(item.text()).toEqual('AW');
  });

  it('shows one initial when name is just one word', () => {
    const item = instance({ ...defaultProps, showInitials: true, personName: 'Bender' });
    expect(item.text()).toEqual('B');
  });

  it('shows just two initials when name is longer than two words', () => {
    const item = instance({ ...defaultProps, showInitials: true, personName: 'Philip J. Fry' });
    expect(item.text()).toEqual('PJ');
  });

  it('shows an interrogation when name has no words', () => {
    const item = instance({ ...defaultProps, showInitials: true, personName: '' });
    expect(item.text()).toEqual('?');
  });

  it('shows a default image when showInitials is set to false and no imageRoute prop is provided', () => {
    const item = instance({ ...defaultProps, showInitials: false });
    const image = 'img.ds-atom-avatar-image';

    expect(item.exists(image)).toBeTruthy();
    expect(item.find(image).prop('alt')).toEqual('default');
  });

  it('shows an image of the person when this is provide by imageRoute prop', () => {
    const item = instance({
      ...defaultProps,
      imageRoute: 'DesignSystem/images/leela.svg',
      personName: 'Leela'
    });
    const image = 'img.ds-atom-avatar-image';

    expect(item.exists(image)).toBeTruthy();
    expect(item.find(image).prop('alt')).toEqual('Leela');
  });

  it('can get an object with one person info and display his initials', () => {
    const item = instance({
      ...defaultProps,
      showInitials: true,
      persons: [{ name: 'Professor Farnsworth' }]
    });
    expect(item.text()).toEqual('PF');
  });

  it('can get an object with three persons info and display the number of persons in the group', () => {
    const item = instance({
      ...defaultProps,
      showInitials: true,
      persons: [{ name: 'Professor Farnsworth' }, { name: 'Philip J. Fry' }, { name: 'Leela' }]
    });
    expect(item.text()).toEqual('+3');
  });
});

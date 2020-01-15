import React from 'react';
import imageDefaultRoute from 'DesignSystem/images/avatar-image-placeholder.svg';
import PropTypes from 'prop-types';

export default class Avatar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    imageRoute: PropTypes.string,
    showInitials: PropTypes.bool,
    numberOfPersons: PropTypes.number,
    size: PropTypes.string,
    personName: PropTypes.string,
    persons: PropTypes.arrayOf(PropTypes.shape)
  };

  static defaultProps = {
    className: '',
    imageRoute: imageDefaultRoute,
    numberOfPersons: 0,
    personName: '',
    showInitials: false,
    size: '',
    persons: []
  };

  getInitials() {
    const numberOfPersons = this.props.persons
      ? this.props.persons.length
      : this.props.numberOfPersons;
    if (numberOfPersons > 1) return `+${numberOfPersons}`;

    const personName =
      this.props.persons.length > 0 ? this.props.persons[0].name : this.props.personName;
    const name = personName.trim().split(/\s+/);
    if (this.props.showInitials && !personName) return '?';
    return name.length > 1 ? `${name[0][0].toUpperCase()}${name[1][0].toUpperCase()}` : name[0][0];
  }

  calculateClassName() {
    const numberOfPersons = this.props.persons
      ? this.props.persons.length
      : this.props.numberOfPersons;
    if (!numberOfPersons) {
      const personName =
        this.props.persons.length > 0 ? this.props.persons[0].name : this.props.personName;
      if (this.props.showInitials && !personName)
        return `ds-atom-avatar-unknown ${this.props.className}`;
    }

    if (this.props.size === 'tiny') return `ds-atom-avatar-tiny ${this.props.className}`;
    if (this.props.size === 'small') return `ds-atom-avatar-small ${this.props.className}`;
    if (this.props.size === 'big') return `ds-atom-avatar-big ${this.props.className}`;
    return `ds-atom-avatar-medium ${this.props.className}`;
  }

  render() {
    const personName = this.props.personName ? this.props.personName : this.props.persons.name;
    const imageRoute = this.props.imageRoute
      ? this.props.imageRoute
      : this.props.persons.imageRoute;
    return (
      <div className={this.calculateClassName()}>
        {this.props.showInitials || this.props.numberOfPersons ? (
          <span className="ds-atom-avatar-with-text">{this.getInitials()}</span>
        ) : (
          <img
            alt={personName || 'default'}
            className="ds-atom-avatar-image"
            src={imageRoute || imageDefaultRoute}
          />
        )}
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import 'DesignSystem/styles/organisms.less';
import Button from 'DesignSystemComponents/atoms/Button';
import imageDefaultRoute from 'DesignSystem/images/no-chats.png';

export default class BlankSlate extends React.PureComponent {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
    explanation: PropTypes.string,
    imageRoute: PropTypes.string,
    title: PropTypes.string,
    buttonLabel: PropTypes.string
  };

  static defaultProps = {
    buttonLabel: 'Click here',
    className: '',
    explanation: '',
    imageRoute: imageDefaultRoute,
    title: ''
  };

  handleSelect = () => {
    this.props.onSelect();
  };

  render() {
    const { title, buttonLabel, explanation, imageRoute } = this.props;

    return (
      <div className={`ds-org-blank-slate ${this.props.className}`}>
        {this.props.imageRoute === 'empty' ? (
          <div className="ds-org-blank-slate-background-image" />
        ) : (
          <img
            className="ds-org-blank-slate-image-container"
            alt="default blank slate"
            src={imageRoute}
          />
        )}
        <h3 className="ds-org-blank-slate-header">{title}</h3>
        <p className="ds-org-blank-slate-paragraph">{explanation}</p>
        <Button
          className="ds-atom-btn-small-primary-normal ds-org-blank-slate-cta"
          onSelect={this.handleSelect}
        >
          {buttonLabel}
        </Button>
      </div>
    );
  }
}

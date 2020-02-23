import React from 'react';

const LanguageContext = React.createContext();

export function withLanguageContext(WrappedComponent) {
  return props => (
    <LanguageContext.Consumer>
      {value => <WrappedComponent {...props} language={value} />}
    </LanguageContext.Consumer>
  );
}

export default LanguageContext;

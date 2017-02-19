import React, { PropTypes } from 'react';

export default function AppContainer(props) {
  return (
    <div className="app-container">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

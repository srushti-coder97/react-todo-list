import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/logo.png" alt="App Logo" className="logo" />
        <h1 className="brandGradient">{title}</h1>
        <img src="/logo.png" alt="App Logo" className="logo" />
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Todo List"
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Logo = (props) => {
  // return <img alt="Logo" src="/static/m2u_logo_black.png" {...props} />;
  return (
    <h1 style={{ color: '#000', fontFamily: 'Lato' }}>
      <IconButton color="inherit">
        <img
          style={{ height: '1.8rem', width: 'auto' }}
          alt="Logo"
          src="/static/logo_white_maybank.png"
          {...props}
        />
      </IconButton>
      {/* Maestro */}
    </h1>
  );
};

export default Logo;

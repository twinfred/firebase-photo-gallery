import React from 'react';
import './Header.scss';

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <h1 className="header__main">Photo Gallery</h1>
      <h2 className="header__secondary">Your pictures</h2>
      <p>Upload your pictures to your personal photo gallery.</p>
    </header>
  );


}

export default Header;
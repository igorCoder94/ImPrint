import React from 'react';
import logo from '../../assets/icons/header/icon.png';

export const Header: React.FC = () => {
  return (
    <header className={`flex flex-shrink-0 relative h-header bg-black`}>
      <img className={`absolute max-h-[120px]`} src={logo} alt="logo" draggable="false" />
    </header>
  );
};

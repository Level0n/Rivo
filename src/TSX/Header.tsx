import HeaderTop from './Header/HeaderTop';
import HeaderBottom from './Header/HeaderBottom';
import '../styles/header/header.css';
import type { JSX } from 'react';

function Header(): JSX.Element {
  return (
    <header className='header'>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
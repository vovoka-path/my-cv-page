import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import * as s from './header.module.css';

import Logo from '../Logo';
import Nav from '../Nav';

console.log('s.header', s.header);

const Header: React.FC = () => {
  const { title } = useSiteMetadata();

  return (
    <header className={s.header}>
      <Logo size="32px" />
      <h1>{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;

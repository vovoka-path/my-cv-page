import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import * as s from './footer.module.css';

import Copyright from '../Copyright';
import Logo from '../Logo';

const Footer: React.FC = () => {
  const { author, authorLink } = useSiteMetadata();

  return (
    <footer>
      <Logo size="16px" />
      <Copyright author={author} authorLink={authorLink} />
    </footer>
  );
};

export default Footer;

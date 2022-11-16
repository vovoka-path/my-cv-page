import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Logo from '../Logo';
import * as s from './footer.module.css';

const Footer: React.FC = () => {
  const { author, authorLink } = useSiteMetadata();

  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href={authorLink}>{author}</a>
      <Logo size="16px" />
    </footer>
  );
};

export default Footer;

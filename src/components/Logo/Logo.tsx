import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import useSiteMetadata from '../../hooks/useSiteMetadata';
const imageLink = '../../images/vovoka-path-200px.jpg';

type LogoProps = {
  size: number;
};

const Logo = ({ size = 32 }: LogoProps) => {
  const { author } = useSiteMetadata();
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return <StaticImage src={imageLink} alt={`Logo ${author}`} imgStyle={style} />;
};

export default Logo;

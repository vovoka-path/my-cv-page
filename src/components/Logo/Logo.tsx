import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type LogoProps = {
  size: string;
};

const Logo = ({ size }: LogoProps) => {
  const style = {
    width: size,
    height: size,
  };

  return <StaticImage src="../../images/vovoka-circle-1.png" alt="Logo" style={style} />;
};

export default Logo;

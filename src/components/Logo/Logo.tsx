import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import useSiteMetadata from '../../hooks/useSiteMetadata';

// const logoSizes = [375, 128, 64, 32, 16];
const imageLink = '../../images/vovoka-path-200px.jpg';
// const imageLink = "../../images/vovoka-circle-1.png";

type LogoProps = {
  size: number;
};

const Logo = ({ size = 32 }: LogoProps) => {
  const { author } = useSiteMetadata();
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // const properSize: number =
  //   logoSizes.find(
  //     (logoSize, i, arr) => size <= logoSize && i !== arr.length - 1 && size > arr[i + 1]
  //   ) || 375;
  // const logoLink = `../../images/logo/vovoka-circle-${properSize}px.png`;

  // console.log('logoLink', logoLink);

  return (
    // <StaticImage
    //   src="../../images/vovoka-circle-1.png"
    //   alt={`Logo ${author}`}
    //   width={size}
    //   height={size}
    // />
    <StaticImage src={imageLink} alt={`Logo ${author}`} imgStyle={style} />
  );
};

export default Logo;

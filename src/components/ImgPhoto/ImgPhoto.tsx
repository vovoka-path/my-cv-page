import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ImgPhoto: React.FC = () => {
  return (
    <StaticImage
      src="../../images/VP_transparent.png"
      alt="Frontend developer photo"
      placeholder="none"
      layout="constrained"
    />
  );
};

export default ImgPhoto;

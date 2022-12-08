import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

type CopyrightProps = {
  author: string;
  authorLink: string;
};

const Copyright = ({ author, authorLink }: CopyrightProps) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}{' '}
      <MuiLink color="inherit" href={authorLink}>
        {author}
      </MuiLink>
    </Typography>
  );
};

export default Copyright;

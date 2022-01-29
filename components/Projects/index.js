import { Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Headline from '../Headline';

import Ecomm from './Ecomm';
import Python from './Python';
const index = () => {
  return (
    <Box sx={{ pt: 2, px: 4, pb: 0, border: '0px solid red' }}>
      <Headline label="Projects" />
      <Python />
      <Divider sx={{ my: 2 }} />
      <Ecomm />
    </Box>
  );
};

export default index;

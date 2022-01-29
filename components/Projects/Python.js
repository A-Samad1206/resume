import React from 'react';
import { Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Headline from '../Headline';

const Python = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'red' }}>
          Interactive Dashboard with Python – Streamlit
        </Typography>

        <Box variant="body1" sx={{ fontWeight: 700 }}>
          <Link href="https://sales-visualise.herokuapp.com/" sx={{ mx: 2 }}>
            Live
          </Link>
          <Link
            href="https://github.com/imsamad/sales_dashboard"
            target="_blank"
          >
            Github Repo
          </Link>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontStyle: 'italic',
          textTransform: 'underline',
        }}
      >
        Python + Pandas + StreamLit + Heroku
      </Typography>
      <Typography variant="subtitle1">
        Sales Dashboard built in Python and the Streamlit library to visualize
        Excel data.
      </Typography>
    </>
  );
};

export default Python;

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const index = () => {
  return (
    <Box sx={{ bgcolor: '#484e5f', width: '100%', p: 3 }}>
      <Typography variant="h3" component="h2" sx={{ color: 'grey.200' }}>
        Abdus Samad
      </Typography>
      <Typography variant="h6" component="h2" sx={{ color: 'primary.light' }}>
        Data science & Full-Stack Web App Dev
      </Typography>
    </Box>
  );
};

export default index;

import { Divider, Typography } from '@mui/material';

const index = ({ label }) => {
  return (
    <Divider textAlign="center" sx={{ mb: 2 }}>
      <Typography
        variant="h6"
        color="grey.100"
        sx={{
          bgcolor: '#484e5f',
          // bgcolor: "primary.light",
          p: 0.5,
          fontWeight: 700,
          borderRadius: 2,
        }}
      >
        {label}
      </Typography>{' '}
    </Divider>
  );
};

export default index;

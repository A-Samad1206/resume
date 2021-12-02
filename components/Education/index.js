import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Headline from "../Headline";
const index = () => {
  return (
    <Box sx={{ pt: 2, px: 4, pb: 0 }}>
      <Headline label="EDUCATION" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          BCA
          <Divider sx={{ bgcolor: "primary.main", height: 4 }} />
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          2019 - present
        </Typography>
      </Box>

      <Typography variant="h6">Phonics Group Of Institutes,Roorkee </Typography>
    </Box>
  );
};

export default index;

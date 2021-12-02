import { Divider, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Headline from "../Headline";
const index = () => {
  return (
    <Box sx={{ pt: 2, px: 4, pb: 0 }}>
      <Headline label="Projects" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          E-Commerce Web App
        </Typography>
        <Box variant="body1" sx={{ fontWeight: 700 }}>
          <Link href="#" sx={{ mx: 2 }}>
            Live
          </Link>
          <Link href="https://github.com/imsamad/ecart" target="_blank">
            Github Repo
          </Link>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        MENN [Mongo + Express.js + Next.js + Node] stack + Redux
      </Typography>
      <ul>
        <li>Online Customer Chat Service</li>
        <li>SSR, SSG, CSR & ISR</li>
        <li>Product Searching Feature</li>
      </ul>
    </Box>
  );
};

export default index;

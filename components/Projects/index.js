import { Divider, Grid, Link, Typography } from "@mui/material";
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
          <Link
            href="https://procart.vercel.app/"
            sx={{ mx: 2 }}
          >
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
      <Grid container sx={{ py: 1 }}>
        <Grid xs={6} item sx={{ px: 1 }}>
          <ul>
            <Typography variant="h6" gutterBottom>
              Frontend
              <Divider
                sx={{ bgcolor: "primary.main", height: 4, width: "30%" }}
              />
            </Typography>
            <li>Order Payment via PayPal</li>
            <li>SSR / SSG / ISR / Client-Side Rendered</li>
            <li>Product Searching Feature</li>
            <li>Forgot/Reset Password</li>
            <li>PWA</li>
          </ul>
        </Grid>
        <Grid xs={6} item>
          <ul>
            <Typography variant="h6" gutterBottom>
              Backend
              <Divider
                sx={{ bgcolor: "primary.main", height: 4, width: "30%" }}
              />
            </Typography>
            <li>Prevent NoSQL injections</li>
            <li>Protect against http param polution</li>
            <li>Add a rate limit for requests</li>
            <li>Prevent cross site scripting - XSS</li>
            <li>Compress & Cache response data</li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default index;

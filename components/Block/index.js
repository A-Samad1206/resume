import { Chip, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

import Headline from '../Headline';

const index = () => {
  return (
    <Box sx={{ pt: 2, px: 4, pb: 0 }}>
      <Headline label="SKILLSET" />

      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          Data Science:-{'  '}
        </Typography>
        Python ,NumPy ,Pandas ,StreamLit
      </Typography>
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          Languages:-{'  '}
        </Typography>
        C/C++, JavaScript, Python
      </Typography>
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          IT Constructs:-{'  '}
        </Typography>
        DS & Algo, OOPS, DBMS
        {/* Computer Network ,OS */}
      </Typography>
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          Frontend:-{'  '}
        </Typography>
        React.js , Next.js , HTML , CSS , JS
      </Typography>
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          Backend:-{'  '}
        </Typography>
        Node.js , Express , Firebase
      </Typography>
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          DB Language:-{'  '}
        </Typography>
        Mongo & SQL
      </Typography>
      {/* <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          DevTools:-{"  "}
        </Typography>
        VS Code & NPM
      </Typography> */}
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          Familiar With:-{'  '}
        </Typography>
        DevOps(Docker,Jenkins, Ansible)
      </Typography>
      <Typography variant="h6">
        <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
          Cloud Platform:-{'  '}
        </Typography>
        Heroku , Vercel , Digital Ocean
      </Typography>
    </Box>
  );
};

export default index;

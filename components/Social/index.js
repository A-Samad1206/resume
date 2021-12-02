import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Icon from "@mui/material/Icon";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LanguageIcon from "@mui/icons-material/Language";
const index = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={1}
      sx={{ bgcolor: "#1f2028", color: "grey.100", p: 2, px: 4 }}
    >
      <Temp label="imsamad00@gmail.com" Icon={EmailIcon} />
      <Temp label="github.com/imsamad" Icon={GitHubIcon} />
      <Temp label="twitter.com/imsamad06" Icon={TwitterIcon} />
      <Temp label="+91-9870645161" Icon={WhatsAppIcon} />
      <Temp label="imsamad.me" Icon={LanguageIcon} />
    </Box>
  );
};
const Temp = ({ label, Icon }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Icon fontSize="small" />
    <Typography variant="subtitle1" sx={{ mx: 1 }}>
      {label}
    </Typography>
  </Box>
);
export default index;

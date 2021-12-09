import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Icon from "@mui/material/Icon";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const index = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={1}
      sx={{ bgcolor: "#1f2028", color: "grey.100", p: 2, px: 4 }}
    >
      <Temp
        label="imsamad00@gmail.com"
        Icon={EmailIcon}
        href="mailto:imsamad00@gmail.com"
      />
      <Temp
        label="github.com/imsamad"
        Icon={GitHubIcon}
        href="https://github.com/imsamad"
      />
      <Temp
        label="twitter.com/imsamad06"
        Icon={TwitterIcon}
        href="https://github.com/imsamad"
      />
      <Temp
        label="+91-9870645161"
        Icon={WhatsAppIcon}
        href="tel:+919870645161"
      />
      <Temp
        label="imsamad.com"
        Icon={LanguageIcon}
        href="https://imsamad.com"
      />
      <Temp
        label="linkedin.com/in/imsamad"
        Icon={LinkedInIcon}
        href="https://linkedin.com/in/imsamad"
      />
    </Box>
  );
};
const Temp = ({ label, Icon, href }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Icon fontSize="small" />
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      sx={{ textDecoration: "none", color: "inherit" }}
    >
      <Typography variant="subtitle1" sx={{ mx: 1 }}>
        {label}
      </Typography>
    </Link>
  </Box>
);
export default index;

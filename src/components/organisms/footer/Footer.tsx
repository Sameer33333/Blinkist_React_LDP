import { Paper, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import FooterList from "../footerList/FooterList";
import Image from "../../atoms/image/Image";
import BlinkistLogo from "../../../images/blinkistLogo.png";


const list1 = [
  "Book lists",
  "What is Nonfiction?",
  "What to read next?",
  "Benefits of reading",
];
const list2 = [
  "Pricing",
  "Blinkist business",
  "Gift cards",
  "Blinkist magaine",
  "Contact & help",
];
const list3 = ["About", "Careers", "partners", "Code of Conduct"];

function Footer() {
  return (
    <Paper
      sx={{
        px: "200px",
        bgcolor: "footerBgColor.main",
        py: "38px",
        mt: "100px",
      }}
    >
      <Grid container>
        <Grid item sm={6}>
          <Image source={BlinkistLogo} imgWidth="100px" imgHeight="24px" />
          <Typography sx={{ mt: 8 }} variant="subtitle1" color="secondary">
            Big ideas in small packages Start learning now
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <FooterList heading="Editorial" list={list1} />
        </Grid>
        <Grid item sm={2}>
          <FooterList heading="Useful links" list={list2} />
        </Grid>
        <Grid item sm={2}>
          <FooterList heading="Company" list={list3} />
        </Grid>
      </Grid>
      <Typography variant="caption1" color="extraTextColor.main">
        © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies
      </Typography>
    </Paper>
  );
}

export default Footer;
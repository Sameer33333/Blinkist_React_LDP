import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import TabPanel from "../../atoms/tabPanel/TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BookInfoTabs(props: BoxProps) {
  const { sx } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "64%", ...sx, mt: 15 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ".MuiTab-root": {
              alignItems: "flex-start",
              p: 0,
              width: "200px",
              textTransform: "none",
              "&.Mui-selected": {
                color: "navTextColors.main",
              },
              fontWeight: "bold",
            },
          }}
        >
          <Tab label="Synopsis" {...a11yProps(0)} />
          <Tab label="Who is it for?" {...a11yProps(1)} />
          <Tab label="About the author" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="body2" color="navTextColors.main">
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text, supplemented with cutting-edge insights and case
          studies pertinent to today’s business world.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}

export default BookInfoTabs;

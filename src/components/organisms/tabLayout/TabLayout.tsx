import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box, { BoxProps } from "@mui/material/Box";
import BookGrid from "../bookGrid/BookGrid";
import TabPanel from "../../atoms/tabPanel/TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export interface BookData {
  id: number;
  coverImage: string;
  bookTitle: string;
  bookAuthor: string;
  time: string;
  isFinished: boolean;
}

interface Props extends BoxProps {
  booksData: Array<BookData>;
}

export default function TabLayout(props: Props) {
  const { sx, booksData } = props;
  const [value, setValue] = React.useState(0);
  const [render, setRender] = React.useState(false);

  const currentlyReadingBooks = booksData.filter((book) => {
    return !book.isFinished;
  });

  const finishedReadingBooks = booksData.filter((book) => {
    return book.isFinished;
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const cardButtonClick = (id: number) => {
    booksData[id].isFinished = !booksData[id].isFinished;
    setRender(!render);
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ".MuiTab-root": {
              alignItems: "flex-start",
              p: 0,
              textTransform: "none",
              width: "300px",
              fontWeight: "bold",
            },
          }}
        >
          <Tab label="Currently Reading" {...a11yProps(0)} />
          <Tab label="Finished" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BookGrid
          booksData={currentlyReadingBooks}
          cardButtonClick={cardButtonClick}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookGrid
          booksData={finishedReadingBooks}
          cardButtonClick={cardButtonClick}
        />
      </TabPanel>
    </Box>
  );
}
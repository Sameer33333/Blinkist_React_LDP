import { Box,Typography} from "@mui/material";
import React from "react";
import ReadTime from "../readTime/ReadTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "../../atoms/image/Image";
import ButtonAtom from "../../atoms/button/CustomButton";

export interface BookProps {
  bookTitle: string;
  bookDesc: string;
  bookAuthor: string;
  time: string;
  coverImage: string;
  onClick?: any;
}

const BookView = (props: BookProps) => {
  const { bookTitle, bookDesc, bookAuthor, time, coverImage, onClick } = props;
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box flexDirection="column">
        <Box pb={6}>
          <Typography variant="heading" color="navTextColors.main">
            {bookTitle}
          </Typography>
        </Box>
        <Box pb={6}>
          <Typography variant="subtitle3" color="navTextColors.main">
            {bookDesc}
          </Typography>
        </Box>
        <Box pb={4.5}>
          <Typography variant="body1" color="extraTextColor.main">
            {bookAuthor}
          </Typography>
        </Box>
        <Box pb={20.5}>
          <ReadTime time={time}></ReadTime>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" width="100%">
          <ButtonAtom
            variant="outlined"
            textColor="primary.main"
            sx={{
              borderColor: "navTextColors.main",
              mr: 6,
            }}
          >
            Read Now
          </ButtonAtom>
          <ButtonAtom
            variant="contained"
            textColor="navTextColors.main"
            backgroundColor="primary.main"
            sx={{
              mr: 6,
            }}
            //onClick={() => onClick()}
          >
            Finished Reading
          </ButtonAtom>
          <ButtonAtom
            sx={{
              mr: 6,
            }}
            variant="text"
            textColor="extraTextColor.main"
            endIcon={<ArrowForwardIcon sx={{ color: "extraTextColor.main" }} />}
          >
            Send To Kindle
          </ButtonAtom>
        </Box>
      </Box>
      <Box>
        <Box>
          <Image
            source={`${process.env.PUBLIC_URL}/assets/cover_image/${coverImage}`}
            imgWidth="302px"
            imgHeight="302px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookView;
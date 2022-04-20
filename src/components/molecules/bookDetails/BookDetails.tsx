import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeLeft from "../readTime/ReadTime";
import { ReactComponent as HorizontalMenu } from "../../../images/horizontalMenu.svg";
import BookCardButton from "../../atoms/bookCardButton/CardButton";
import { ButtonProps } from "@mui/material";
import Icon from "../../atoms/icon/Icon";

interface Props extends ButtonProps {
  time: string;
  bookTitle: string;
  bookAuthor: string;
  isButtoned: boolean;
  btnText?: string;
  isHovered: boolean;
}

function BookDetails(props: Props) {
  const {
    bookTitle,
    bookAuthor,
    time,
    isButtoned,
    btnText,
    startIcon,
    isHovered,
  } = props;
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "99%",
          mx: "auto",
          borderLeft: 1,
          borderRight: 1,
          borderColor: "secondary_100.main",
          bgcolor: isHovered ? "footerBgColor.main" : "white",
          mt: 0,
        }}
      >
        <Box sx={{ px: 4, pt: 6, pb: 2 }}>
          <Typography variant="subtitle2" color="navTextColors.main">
            {bookTitle}
          </Typography>
          <Typography
            variant="body1"
            color="extraTextColor.main"
            sx={{ mt: 4 }}
          >
            {bookAuthor}
          </Typography>
          <TimeLeft sx={{ mt: 4 }} time={time} />
          <Box
            sx={{
              display: "flex",
              mt: 2,
              justifyContent: "flex-end",
            }}
          >
            {!isButtoned && (
              <Icon iconComponent={HorizontalMenu} width="18px" height="4px" />
            )}
          </Box>
        </Box>
        {isButtoned && (
          <BookCardButton
            btnText={btnText}
            startIcon={startIcon}
            isHovered={isHovered}
          />
        )}
      </Box>
    </div>
  );
}

export default BookDetails;
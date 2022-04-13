import React from "react";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import Icon from "../../atoms/icon/Icon";
import { ReactComponent as ClockIcon } from "../../../images/clockIcon.svg";

interface Props extends BoxProps {
  time: string;
}

function ReadTime(props: Props) {
  const { sx, time} = props;
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ...sx,
        }}
      >
        <Icon iconComponent={ClockIcon} color="extraTextColor.main" />
        <Typography
          variant="caption3"
          color="extraTextColor.main"
          sx={{ ml: 2 }}
        >
          {time}-minute read
        </Typography>
      </Box>
    </div>
  );
}

export default ReadTime;

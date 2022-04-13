import React from "react";
import Icon from "../../atoms/icon/Icon";
import { Box, Typography } from "@mui/material";

type Props = {
  iconComponent: React.ElementType<any>;
  buttonText: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function ExploreMenuButton(props: Props) {
  const { iconComponent, buttonText, onClick } = props;
  return (
    <div onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover *": {
            cursor: "pointer",
            color: "secondary.main",
          },
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Icon iconComponent={iconComponent} />
        <Typography variant="body2" color="extraTextColor.main" sx={{ ml: 1 }}>
          {buttonText}
        </Typography>
      </Box>
    </div>
  );
}

export default ExploreMenuButton;

import { Box } from "@mui/material";
import React from "react";
import AccountAvatar from "../../atoms/userAvatar/UserAvatar";
import { ReactComponent as ExpandMoreIcon } from "../../../images/expandMore.svg";
import Icon from "../../atoms/icon/Icon";

type Props = {
  onClick?: any;
  userName?: string;
};

function UserAvatarButton(props: Props) {
  const { onClick, userName } = props;

  return (
    <div onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        {(
          <AccountAvatar initials={userName ? userName[0] : "SS"} />
        )}
        {(
          <Icon
            iconComponent={ExpandMoreIcon}
            width="11px"
            height="6px"
            ml={1}
          />
        )}
      </Box>
    </div>
  );
}

export default UserAvatarButton;
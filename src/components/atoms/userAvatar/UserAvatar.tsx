import React from "react";
import Avatar from "@mui/material/Avatar";
type Props = {
  initials?: string;
};
function UserAvatar(props: Props) {
  const { initials } = props;
  return (
    <div>
      <Avatar sx={{ bgcolor: "purple_100.main" }}>
        {initials && initials[0].toUpperCase()}
      </Avatar>
    </div>
  );
}
export default UserAvatar;

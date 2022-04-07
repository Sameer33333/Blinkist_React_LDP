import React from "react";
import IconButton from "@mui/material/IconButton";
import { BoxProps } from "@mui/material/Box";
import Icon from "../icon/Icon";
interface Props extends BoxProps {
  iconComponent: React.ElementType<any>;
}
function IconButtonAtom(props: Props) {
  const { sx, iconComponent } = props;
  return (
    <div>
      <IconButton aria-label="search button" sx={{ ...sx }}>
        <Icon iconComponent={iconComponent} />
      </IconButton>
    </div>
  );
}
export default IconButtonAtom;

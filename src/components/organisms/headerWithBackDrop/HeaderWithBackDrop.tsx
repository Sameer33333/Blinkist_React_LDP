import { Box } from "@mui/material"; 
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import ExploreMenu from "../exploreMenu/ExploreMenu";
import Header from "../header/Header";
import { ReactComponent as ExpandMoreIcon } from "../../../images/expandMore.svg";
import { ReactComponent as ExpandLessIcon } from "../../../images/expandLess.svg";
import Icon from "../../atoms/icon/Icon";

type Props = {
  children?: React.ReactNode;
  onExploreMenuClick?: any;
  gotoMyLibrary?: any;
};

function HeaderWithBackDrop(props: Props) {
  const { children, onExploreMenuClick, gotoMyLibrary } = props;

  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(
    <Icon
      iconComponent={ExpandMoreIcon}
      color="navTextColors.main"
      width="11px"
      height="6px"
    />
  );
  const handleOpen = () => {
    setOpen(!open);
    if (open) {
      setIcon(
        <Icon
          iconComponent={ExpandMoreIcon}
          color="navTextColors.main"
          width="11px"
          height="6px"
        />
      );
      document.body.style.overflow = "unset";
    } else {
      setIcon(
        <Icon
          iconComponent={ExpandLessIcon}
          color="navTextColors.main"
          width="11px"
          height="6px"
        />
      );
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
    setIcon(
      <Icon
        iconComponent={ExpandMoreIcon}
        color="navTextColors.main"
        width="11px"
        height="6px"
      />
    );
  };

  return (
    <div>
      <Header
        btnClick={handleOpen}
        btnIcon={icon}
        gotoMyLibrary={gotoMyLibrary}
      />
      <Box id="content" sx={{ position: "relative", height: "100vh" }}>
        <Backdrop
          sx={{
            position: "absolute",
            color: "backDropColor.main",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: "100vh",
          }}
          open={open}
          onClick={handleClose}
        >
          <Box sx={{ position: "absolute", top: 0 }}>
            <ExploreMenu onClick={onExploreMenuClick} />
          </Box>
        </Backdrop>
        {children}
      </Box>
    </div>
  );
}

export default HeaderWithBackDrop;
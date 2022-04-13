import React from "react";
import BlinkistLogo from "../../../images/blinkistLogo.png";
import Box from "@mui/material/Box";
import IconButton from "../../atoms/iconButton/IconButtonAtom";
import AvatarButton from "../../molecules/userAvatarButton/UserAvatarButton";
import Image from "../../atoms/image/Image";
import ButtonAtom from "../../atoms/button/CustomButton";
import { theme } from "../../../themes/themes";
import { Menu, MenuItem } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../images/searchIcon.svg";

type Props = {
  btnClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnIcon?: React.ReactNode;
  gotoMyLibrary?: any;
  };

function Header(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { btnClick, btnIcon, gotoMyLibrary} = props;
  
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: "250px",
          py: "30px",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image source={BlinkistLogo} imgHeight="26px" imgWidth="124px" />
          <IconButton iconComponent={SearchIcon} sx={{ ml: 10 }} />
          <ButtonAtom
            ml={10}
            onClick={btnClick}
            endIcon={btnIcon}
            borderRadius={0}
            hoverBottomBorder={`1px solid ${theme.palette.primary.main}`}
            textColor="navTextColors.main"
            variant="text"
            hoverBackGroundColor="white"
          >
            Explore
          </ButtonAtom>
          <ButtonAtom
            variant="text"
            textColor="navTextColors.main"
            size="medium"
            onClick={() => gotoMyLibrary()}
            ml={10}
          >
            My Library
          </ButtonAtom>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
       

          
            <AvatarButton
             
              
            />
          
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
          </Menu>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
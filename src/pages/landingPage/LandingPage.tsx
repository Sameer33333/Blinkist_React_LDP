import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../components/organisms/footer/Footer";
import HeaderWithBackDrop from "../../components/organisms/headerWithBackDrop/HeaderWithBackDrop";
import TabLayout from "../../components/organisms/tabLayout/TabLayout";
import BBCoverImage from "../../../images/cover_image/Boss.png";
import ETECoverImage from "../../../images/cover_image/ETE.png";
import DHTACoverImage from "../../../images/cover_image/DHTA.png";
import FOFCoverImage from "../../../images/cover_image/FOF.png";
import LOSCoverImage from "../../../images/cover_image/LOS.png";
import LYBCoverImage from "../../../images/cover_image/LYB.png";
import TLCCoverImage from "../../../images/cover_image/TLC.png";
import EBFBCoverImage from "../../../images/cover_image/EBFB.png";
import DropshippingCoverImage from "../../../images/cover_image/DropShipping.png";
import EntrepreneurshipCI from "../../../images/cover_image/Entrepreneurship.png";
import { BookData } from "../../components/organisms/tabLayout/TabLayout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [data, setData] = useState<Array<BookData>>([]);
  const [useFetchData] = useState(true);

  const navigate = useNavigate();
  const openPage = (catName: string) => {
    let path = "/explore-books/" + catName;
    navigate(path);
  };

  const gotoMyLibrary = () => {
    navigate("/");
  };

  useEffect(() => {
    if (useFetchData){
      fetch("http://localhost:3000/myLibrary")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          console.log(json);
        });
    }
  },[useFetchData]);

  return (
    <div>
      <HeaderWithBackDrop
        onExploreMenuClick={openPage}
        gotoMyLibrary={gotoMyLibrary}
      >
        <Box sx={{ mx: 0, px: "250px" }}>
          <Typography
            sx={{ mt: 15 }}
            variant="heading"
            color="navTextColors.main"
          >
            My Library
          </Typography>
          <TabLayout booksData={data} sx={{ mt: 10 }} />
        </Box>
        <Footer />
      </HeaderWithBackDrop>
    </div>
  );
};

export default LandingPage;

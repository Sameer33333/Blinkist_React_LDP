import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/organisms/header/Header";
import HeaderWithBackDrop from "../../components/organisms/headerWithBackDrop/HeaderWithBackDrop";
import BBCoverImage from "../../../images/cover_image/Boss.png";
import ETECoverImage from "../../../images/cover_image/ETE.png";
import DHTACoverImage from "../../../images/cover_image/DHTA.png";
import FOFCoverImage from "../../../images/cover_image/FOF.png";
import LOSCoverImage from "../../../images/cover_image/LOS.png";
import LYBCoverImage from "../../../images/cover_image/LYB.png";
import TLCCoverImage from "../../../images/cover_image/TLC.png";
import EBFBCoverImage from "../../../images/cover_image/EBFB.png";
import EntrepreneurshipCI from "../../../images/cover_image/Entrepreneurship.png";
import BookCard from "../../components/molecules/bookCard/BookCard";
import AddIcon from "@mui/icons-material/Add";
import { theme } from "../../themes/themes";
import ExploreBookBanner from "../../components/molecules/exploreBooksBanner/ExploreBooksBanner";
import SearchBar from "../../components/molecules/searchBar/SearchBar";
import AddBookGrid from "../../components/organisms/addBookGrid/AddBookGrid";
import Footer from "../../components/organisms/footer/Footer";
import Dropshipping from "../../../images/cover_image/DropShipping.png";
import { Paper } from "@mui/material";
import { bookProps } from "../../components/organisms/addBookGrid/AddBookGrid";
import { useNavigate } from "react-router-dom";

type Props = {};

const EntrepreneurshipBooks = ({}: Props) => {
  const [trendingBlinkz, setTrendingBlinkz] = useState<Array<bookProps>>([]);
  const [justAdded, setJustAdded] = useState<Array<bookProps>>([]);
  const [audioBlinkz, setAudioBlinkz] = useState<Array<bookProps>>([]);

  const navigate = useNavigate();
  const openPage = (catName: string) => {
    let path = "/explore-books/" + catName;
    navigate(path);
  };

  const gotoMyLibrary = () => {
    navigate("/");
  };

  const gotoBookPage = () => {
    let path = "/book/beyond-entrepreneurship-2.0";
    navigate(path);
  };

  useEffect(() => {
    fetch("http://localhost:3000/trendingBlinkz/")
      .then((response) => response.json())
      .then((json) => {
        setTrendingBlinkz(json);
      });
    fetch("http://localhost:3000/justAdded")
      .then((response) => response.json())
      .then((json) => {
        setJustAdded(json);
      });
    fetch("http://localhost:3000/audioBlinkz")
      .then((response) => response.json())
      .then((json) => {
        setAudioBlinkz(json);
      });
  }, []);

  return (
    <div>
      <HeaderWithBackDrop
        onExploreMenuClick={openPage}
        gotoMyLibrary={gotoMyLibrary}
      >
        <Box sx={{ px: 60 }}>
          <ExploreBookBanner />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Trending blinks
          </Typography>
          <AddBookGrid gridData={trendingBlinkz} handleClick={gotoBookPage} />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Just added
          </Typography>
          <AddBookGrid gridData={justAdded} />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Featured audio blinks
          </Typography>
          <AddBookGrid gridData={audioBlinkz} />
        </Box>
        <Footer />
      </HeaderWithBackDrop>
    </div>
  );
};

export default EntrepreneurshipBooks;
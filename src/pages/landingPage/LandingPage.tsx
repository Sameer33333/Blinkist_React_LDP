import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../components/organisms/footer/Footer";
import HeaderWithBackDrop from "../../components/organisms/headerWithBackDrop/HeaderWithBackDrop";
import TabLayout from "../../components/organisms/tabLayout/TabLayout";
import { BookData } from "../../components/organisms/tabLayout/TabLayout";
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

import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookView from "../../components/molecules/bookView/BookView";
import BookImage from "../../../images/coverImage.png";
import HeaderWithBackDrop from "../../components/organisms/headerWithBackDrop/HeaderWithBackDrop";
import BookInfoTabs from "../../components/organisms/bookInfoTabs/BookInfoTabs";
import Footer from "../../components/organisms/footer/Footer";
import { BookProps } from "../../components/molecules/bookView/BookView";
import { useNavigate } from "react-router-dom";

const bookDetails = {
  bookTitle: "",
  bookDesc: "",
  bookAuthor: "",
  time: "",
  coverImage: "",
};

const BookDetailsPage = () => {
  const [data, setData] = useState<BookProps>(bookDetails);

  const navigate = useNavigate();
  const openPage = (catName: string) => {
    let path = "/explore-books/" + catName;
    navigate(path);
  };

  const gotoMyLibrary = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:3000/trendingBlinkz/2")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const addBook = () => {
    fetch("http://localhost:3000/myLibrary", {
      method: "POST",
      body: JSON.stringify({
        coverImage: "Entrepreneurship.png",
        bookTitle: "Beyond Entrepreneurship",
        bookAuthor: "Jim Collins & Bill Lazier",
        time: "13",
        isFinished: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <HeaderWithBackDrop
        onExploreMenuClick={openPage}
        gotoMyLibrary={gotoMyLibrary}
      >
        <Box sx={{ px: 62.5 }}>
          <Typography pb={10} variant="body2" color="navTextColors.main">
            Get the key ideas from
          </Typography>
          <BookView
            bookTitle={data.bookAuthor}
            bookAuthor={data.bookAuthor}
            bookDesc={data.bookDesc}
            time={data.time}
            coverImage={data.coverImage}
            onClick={addBook}
          />
          <BookInfoTabs />
        </Box>
        <Footer />
      </HeaderWithBackDrop>
    </div>
  );
};

export default BookDetailsPage;

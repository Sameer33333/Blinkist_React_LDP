import React from "react";
import { Grid } from "@mui/material";
import BookCard from "../../molecules/bookCard/BookCard";

interface BookData {
  id: number;
  coverImage: string;
  bookTitle: string;
  bookAuthor: string;
  time: string;
  isFinished: boolean;
}

type Props = {
  booksData: Array<BookData>;
  cardButtonClick: any;
};

function BookGrid(props: Props) {
  const { booksData, cardButtonClick } = props;

  const booksGridItems = booksData.map((book) => {
    let buttonText = "Finish Reading";
    if (book.isFinished) {
      buttonText = "Read Again";
    }

    return (
      <Grid item xs={4} display="flex" justifyContent="center">
        <BookCard
          key={book.id}
          coverImage= {`${process.env.PUBLIC_URL}/assets/cover_image/${book.coverImage}`}
          bookTitle={book.bookTitle}
          bookAuthor={book.bookAuthor}
          time={book.time}
          isButtoned={true}
          btnText={buttonText}
          handleClick={cardButtonClick}
          index={book.id}
        />
      </Grid>
    );
  });

  return (
    <div>
      <Grid container columnSpacing={"25px"} rowGap={4}>
        {booksGridItems}
      </Grid>
    </div>
  );
}

export default BookGrid;
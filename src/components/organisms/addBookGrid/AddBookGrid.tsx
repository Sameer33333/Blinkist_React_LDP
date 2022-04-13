import { Grid } from "@mui/material";
import React from "react";
import BookCard from "../../molecules/bookCard/BookCard";
import AddIcon from "@mui/icons-material/Add";

export type bookProps = {
  id: number;
  coverImage: string;
  bookTitle: string;
  bookAuthor: string;
  time: string;
};

type Props = {
  gridData: Array<bookProps>;
  handleClick?: any;
};

function AddBookGrid(props: Props) {
  const { gridData, handleClick } = props;

  const gridItems = gridData.map((book) => (
    <Grid item>
      <BookCard
        key={book.id}
        coverImage={`${process.env.PUBLIC_URL}/assets/cover_image/${book.coverImage}`}
        bookTitle={book.bookTitle}
        bookAuthor={book.bookAuthor}
        time={book.time}
        isButtoned={true}
        btnText="Add to library"
        startIcon={<AddIcon />}
        handleClick={handleClick}
        index={book.id}
      />
    </Grid>
  ));

  return (
    <div>
      <Grid
        container
        justifyContent={"space-between"}
        width="100%"
        spacing={0}
        rowSpacing={6}
      >
        {gridItems}
      </Grid>
    </div>
  );
}

export default AddBookGrid;

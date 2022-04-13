import React from "react";

type Props = {
  source: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
};

const Image = (props: Props) => {
  const { source, imgHeight, imgWidth } = props;
  return (
    <img
      style={{
        display: "block",
      }}
      src={source}
      height={imgHeight ?? "inherit"}
      alt="Book"
      width={imgWidth ?? "inherit"}
    ></img>
  );
};

export default Image;
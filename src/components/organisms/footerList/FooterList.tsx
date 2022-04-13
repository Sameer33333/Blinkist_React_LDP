import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type Props = {
  list: Array<string>;
  heading: string;
};

const FooterList = (props: Props) => {
  const { list, heading } = props;

  const listItems = list.map((item) => (
    <ListItem>
      <Typography variant="body2" color="extraTextColor.main">
        {item}
      </Typography>
    </ListItem>
  ));
  return (
    <div>
      <List>
        <ListItem>
          <Typography variant="body1" color="navTextColors">
            {heading}
          </Typography>
        </ListItem>
        {listItems}
      </List>
    </div>
  );
};

export default FooterList;
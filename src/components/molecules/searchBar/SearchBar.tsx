import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { theme } from "../../../themes/themes";


const SearchBar = () => {
  return (
    <div>
      <TextField
        placeholder="Search by title or author"
        variant="standard"
        sx={{
          ".MuiInput-root": {
            fontSize: `${theme.typography.h3.fontSize}`,
          },
          ".MuiInput-root:before,.MuiInput-root:after,.MuiInput-root:hover,.MuiInput-root:hover:not(.Mui-disabled):before":
            {
              borderColor: "extraTextColor.main",
              borderWidth: 2,
            },
          width: "63%",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "extraTextColor.main" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
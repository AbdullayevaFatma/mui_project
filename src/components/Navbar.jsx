import { AddAlert, Home } from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { useNews } from "../context/NewsContext";



const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "none",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

let debounceTimer;

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { articles, setFilteredArticles } = useNews();
  const theme = useTheme();

  const handleSearch = () => {
    if (search.trim() !== "") {
      const filteredArticles = articles.filter((article) =>
        article.description.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredArticles(filteredArticles);
    } else {
      setFilteredArticles(articles);
    }
  };
  useEffect(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (search.trim() !== "") {
        const filtered = articles.filter((article) =>
          article.description?.toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredArticles(filtered);
      } else {
        setFilteredArticles([])
      }
    }, 200);
    return () => clearTimeout(debounceTimer);
  }, [search]);
  
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary.main
                : "inherit",
          }}
        >
          TechPulse
        </Typography>
        <Home
          sx={{
            display: { xs: "block", sm: "none" },
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary.main
                : "inherit",
          }}
        />
        <Search>
          <InputBase
            sx={{
              color: "gray",
              "& input::placeholder": {
                color: "gray",
                opacity: 1,
              },
            }}
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </Search>
        <Icons>
          <Typography
            variant="h6"
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.main
                  : "inherit",
            }}
          >
            SUBSCRIBE
          </Typography>
          <AddAlert
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.main
                  : "inherit",
            }}
          />
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;

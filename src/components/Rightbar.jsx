import { Box, ImageList, ImageListItem, List, Typography } from "@mui/material";
import React from "react";
import RightSideList from "./RightSideList";
import { useNews } from "../context/NewsContext";

const Rightbar = () => {
  const { articles } = useNews();

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={8}>
          {articles.slice(0, 3).map((article, index) => (
            <ImageListItem article={article} key={index}>
              <img
                src={article.urlToImage}
                alt={article.description}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Tech News
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, }}
        >
          {articles.slice(0, 7).map((article, index) => (
            <RightSideList article={article} key={index} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

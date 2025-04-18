import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";
import { useNews } from "../context/NewsContext";
import Loading from "./Loading";

const Feed = () => {
  const { loading, filteredArticles } = useNews();

  if (loading) return <Loading />;
  return (
    <Box flex={4} p={2}>
      {filteredArticles.map((article, index) => (
        <Post key={index} article={article} />
      ))}
    </Box>
  );
};

export default Feed;

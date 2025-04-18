import React from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";

const Loading = ({ message = "Loading...", onRetry }) => {
  return (
    <Box
      flex={4}
      p={2}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
      {onRetry && (
        <Button onClick={onRetry} variant="outlined">
          Retry
        </Button>
      )}
    </Box>
  );
};

export default Loading;


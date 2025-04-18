import React from 'react'
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {useTheme} from '@mui/material';

const Post = ({article}) => {
  const theme = useTheme()

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      year: "numeric",
      day: "numeric",
    }).replace(/,/g,"");
  
  };
  
  return (
    <Card sx={{margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="recipe">
          {article.author ? article.author.charAt(0).toUpperCase() : "X"}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title={article.author}
      subheader={formatDate(article.publishedAt)}
    />
    <CardMedia
      component="img"
      height="15%"
      image={article.urlToImage}
      alt={article.author}
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
       {article.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "theme.palette.primary.main"}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

export default function PostCard(props:any) {
  const post = props.post;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            1
          </Avatar>
        }
        title={post.user.name}
        subheader={post.created_at}
      />
      <CardActionArea href={`post/${post.id}`} >
        <CardMedia component="img" height="200" image={post.image_url} />
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small">
          {post.user.name}
        </Button>
        <Button variant="contained" size="small">
          {post.pet.name}
        </Button>
      </CardActions>
    </Card>
  );
}

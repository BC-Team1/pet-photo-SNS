import * as React from "react";
import { post } from "../../lib/postApiClient";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

export async function getServerSideProps(context:any) {
    const { post_id } = context.query;
    const posts = await post.get(`/${post_id}`);
  return {
    props: {
      posts: posts.data,
    },
  };
}

const Post = (props: any) => {
  const post = props.posts;
  console.log(post);
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="postDetail">
            1
          </Avatar>
        }
        title={post.user.name}
        subheader={post.created_at}
      />
        <CardMedia component="img" height="500" width="500" image={post.image_url} />
      <CardActions>
        <Button variant="contained" size="small">
          {post.user.name}
        </Button>
        <Button variant="contained" size="small">
          {post.pet.name}
        </Button>
      </CardActions>
      <CardContent>
        {post.caption}
      </CardContent>
    </Card>
  );
};

export default Post;

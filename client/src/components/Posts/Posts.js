import React from "react";
import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  return (
    <>
      <div>POSTS</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

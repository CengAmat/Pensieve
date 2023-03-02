import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

import Post from "./Post/Post";
import { PostsState } from "../../reducers/posts";

const Posts: React.FC = () => {
  const posts = useSelector<PostsState, PostsState["posts"]>(
    (state) => state.posts
  );
  const theme = createTheme();

  console.log(posts);

  return (
    <ThemeProvider theme={theme}>
      <>
        <div>POSTS</div>
        <Post />
        <Post />
      </>
    </ThemeProvider>
  );
};

export default Posts;

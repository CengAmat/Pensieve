import React from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

import Post from "./Post/Post";
import { useGetPostsQuery } from "../../features/posts/postSlice";

const Posts: React.FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!posts) {
    return <div>No posts :(</div>;
  }

  const theme = createTheme();

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

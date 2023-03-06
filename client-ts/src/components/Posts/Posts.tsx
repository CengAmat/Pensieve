import React from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

import Post from "./Post/Post";
import { useGetPostsQuery } from "../../features/posts/postSlice";

const Posts: React.FC = () => {
  const { data = [], isFetching } = useGetPostsQuery();
  console.log(data);

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

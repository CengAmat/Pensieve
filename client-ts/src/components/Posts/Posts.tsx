import React from 'react';
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material'

import Post from './Post/Post';

const Posts: React.FC = () => {
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

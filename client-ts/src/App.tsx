import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import pensieve from "./images/pensieve.png";
import useStyles from './styles';

const App: React.FC = () => {
  const classes = useStyles();
  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Pensieve
        </Typography>
        <img className={classes.image} src={pensieve} alt="icon" height="600" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
               </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

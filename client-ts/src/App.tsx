import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import pensieve from "./images/pensieve.png";
import useStyles from "./styles";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, incrementByAmount } from "./features/posts/counterSlice";

const App: React.FC = () => {
  const classes = useStyles();

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incrementByAmount(3));
  }

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Pensieve
        </Typography>
        <img className={classes.image} src={pensieve} alt="icon" height="600" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <button onClick={handleClick}>Count is: {count}</button>
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
};

export default App;

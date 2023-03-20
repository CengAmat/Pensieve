import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import makeStyles from "./styles";
import { useCreatePostMutation, Post } from "../../features/posts/postSlice";

const Form = () => {
  const classes = makeStyles();

  const initialValue = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };

  const [post, setPost] =
    useState<
      Pick<Post, "creator" | "title" | "message" | "tags" | "selectedFile">
    >(initialValue);
  const [addPost, { isLoading }] = useCreatePostMutation();

  if (isLoading) {
    return <div>Sending!..</div>;
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addPost(post).unwrap();
      setPost(initialValue);
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setPost({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={post.creator}
          onChange={(e) => setPost({ ...post, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={post.message}
          onChange={(e) => setPost({ ...post, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={post.tags}
          onChange={(e) => setPost({ ...post, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

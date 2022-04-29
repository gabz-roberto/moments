import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) => currentId ? state.posts.find((pst) => pst._id === currentId) : null);

  const classes = useStyles();

  const dispatch = useDispatch();

  // preencher o formulário de edição
  useEffect(() => {
    if(post) { setPostData(post) }
  }, [post])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    })
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          { currentId ? "Edite" : "Crie"} um Momento
        </Typography>
          <TextField name="creator" variant="outlined" label="Autor" fullWidth value={postData.creator} onChange={(event) => setPostData({ ...postData, creator: event.target.value })}/>
          <TextField name="title" variant="outlined" label="Título" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })}/>
          <TextField name="message" variant="outlined" label="Mensagem" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })}/>
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(',') })}/>

          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Enviar</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpar</Button>
      </form>
    </Paper>
  );
};

export default Form;

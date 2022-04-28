import React, { useState } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';

import useStyles from "./styles";

const Form = (props) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const classes = useStyles();

  const handleSubmit = () => {};

  const clear = () => {}

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Adicione um Momento
        </Typography>
          <TextField name="creator" variant="outlined" label="Autor" fullWidth value={postData.creator} onChange={(event) => setPostData({ ...postData, creator: event.target.value })}/>
          <TextField name="title" variant="outlined" label="Título" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })}/>
          <TextField name="message" variant="outlined" label="Mensagem" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })}/>
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value })}/>

          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({... postData, selectedFile: base64})}/>
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Enviar</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Enviar</Button>
      </form>
    </Paper>
  );
};

export default Form;

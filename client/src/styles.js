import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#802680",
  },
  heading: {
    color: "#FFF",
    cursor: "default",
    margin: "20px 0",
  },
  image: {
    marginLeft: "20px",
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      direction: "column-reverse",
    }
  }
}));

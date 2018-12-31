import styleSheet from "../constants/styles";

const styles = {
  title: {
    textAlign: "center"
  },
  loginButton: {
    backgroundColor: styleSheet.primaryColor,
    fontSize: "1.1rem",
    padding: "0.2rem 0rem",
    color: "white",
    ":hover": {
      color: "black"
    }
  },
  alerts: {
    textAlign: "center"
  },
  alert: {
    width: "80%",
    display: "none",
    show: {
      display: "block"
    }
  }
};

export default styles;

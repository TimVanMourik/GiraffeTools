import styleSheet from "../constants/styles";
import boxesStyles from "./boxes";
import componentStyles from "./components";
import headingStyles from "./headings";

const styles = {
  sticky: {
    paddingTop: "0.5rem"
  },
  box: {
    ...boxesStyles.giraffeBox
  },
  profilePic: {
    width: "50%",
    marginTop: "3rem",
    marginBottom: "2rem",
    clipPath: "circle(50% at center)"
  },
  username: {
    ...headingStyles.h3,
    color: styleSheet.primaryColor
  },
  separator: {
    ...componentStyles.separator,
    width: "100%"
  },

  activeProjectCounter: {
    fontSize: "40px",
    textAlign: "center",
    color: styleSheet.primaryColor,

    WebkitBorderRadius: "30px",
    border: `4px solid ${styleSheet.primaryColor}`,
    width: "60px",
    height: "60px",
    // font-weight: bold;
    padding: 0
  },

  activeGiraffeText: {
    fontSize: "1.3rem",
    marginTop: "1rem"
  }
};

export default styles;

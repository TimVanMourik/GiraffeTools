import buttonStyles from "./buttons";
import styleSheet from "../constants/styles";

const styles = {
  banner: {
    height: "22rem",
    marginBottom: "1rem",
    backgroundImage: "url(/static/img/header_subpage_background.jpg)",
    backgroundColor: styleSheet.primaryLightColor,
    backgroundSize: "cover",
    padding: "0rem 0rem",
    position: "relative"
  },
  bannerLogo: {
    height: "8rem",
    margin: "2rem 5rem",
    position: "absolute"
  },
  bannerTitle: {
    fontSize: "4rem",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "30%"
  },
  titleRow: {
    transform: "translateY(65%)",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  open: {
    ...buttonStyles.giraffeButton,
    ...buttonStyles.giraffeButton.small
  }
};

export default styles;

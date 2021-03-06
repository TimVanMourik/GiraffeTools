const styles = {
  button: {
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    userSelect: "none",
    fontSize: 0,
    margin: "0rem 0.5rem"
  },
  githubButton: {
    backgroundColor: "#eff3f6",
    backgroundImage: "linear-gradient(to bottom, #fafbfc, #e4ebf0)",
    backgroundRepeat: "repeat-x",
    backgroundSize: "110% 110%",

    display: "inline-block",
    fontWeight: 600,
    verticalAlign: "bottom",
    cursor: "pointer",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d1d2d3",
    borderRadius: "0.25em",

    color: "#24292e",
    textDecoration: "none",
    outline: 0,
    fontSize: "12px",
    padding: "0 10px",
    height: "26px",
    lineHeight: "26px",
    ":hover": {
      backgroundColor: "#e6ebf1",
      backgroundImage: "linear-gradient(to bottom, #f0f3f6, #dce3ec)",
      borderColor: "#afb1b2"
    }
  },
  octicon: {
    height: "18px",
    top: "4px",
    position: "relative",
    display: " inline-block",
    verticalAlign: "top",
    margin: "0rem 0.2rem"
  },
  b: {
    top: "50%",
    left: 0,
    width: 0,
    height: 0,
    margin: "-5px 0 0 -5px",
    borderWidth: "5px 5px 5px 0",
    borderColor: "transparent #d1d2d3 transparent transparent",
    position: "absolute",
    borderStyle: "solid",
    display: "block"
  },
  i: {
    top: "50%",
    left: 0,
    width: 0,
    height: 0,
    margin: "-5px 0 0 -4px",
    borderWidth: "5px 5px 5px 0",
    borderColor: "transparent #fff transparent transparent",
    position: "absolute",
    display: "block",
    borderStyle: "solid"
  },
  socialCount: {
    position: "relative",
    backgroundColor: "#fff",
    padding: "0 7px",
    marginLeft: "7px",
    fontSize: "11px",
    height: "26px",
    lineHeight: "26px",
    display: "inline-block",
    fontWeight: 600,
    verticalAlign: "bottom",
    cursor: "pointer",
    border: "1px solid #d1d2d3",
    borderRadius: "0.25em",
    color: "#24292e",
    textDecoration: "none",
    outline: 0,
    "&hover": {}
  }
};

export default styles;

// import { REACT_APP_ENVIRONMENT } from "react-native-dotenv";
// console.log("MOBILE REACT_APP_ENVIRONMENT", REACT_APP_ENVIRONMENT);
console.log("REACT_APP_ENVIRONMENT", process.env.REACT_APP_ENVIRONMENT);
const typePath = {
  web: require("./index.web"),
  mobile: require("./index.mobile")
};
const type = process.env.REACT_APP_ENVIRONMENT === "web" ? typePath.web : typePath.mobile;

module.exports = type;

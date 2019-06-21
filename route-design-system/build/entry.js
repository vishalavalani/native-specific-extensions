// import * as web from "./web";
// import * as mobile from "../src/index.native";

// import { REACT_APP_ENVIRONMENT } from "react-native-dotenv";
// console.log("MOBILE REACT_APP_ENVIRONMENT", REACT_APP_ENVIRONMENT);
console.log("REACT_APP_ENVIRONMENT", process.env.REACT_APP_ENVIRONMENT);
// const mobile = require("../src/index.native");
const isWeb = process.env.REACT_APP_ENVIRONMENT === "web";
// const isMobile = REACT_APP_ENVIRONMENT === "mobile";

console.log("isWeb", isWeb);
// console.log("isMobile", isMobile);

if (isWeb) {
  module.exports = require("./web");
} else {
  //finalFile = require("../src/index.native");
  // export default mobile;
  // import("../src/index.native").then(Baz => {
  //   console.log(Baz);
  // });
}

// module.exports = isWeb ? web : mobile;

// if (!isWeb) {
//   console.log("mobile");
//   //Assuming that it is mobile
//   const mobile = require("./mobile.js");
//   module.exports = mobile;
//   //   alert("mobile");
// }

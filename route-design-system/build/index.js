const type =
  typeof navigator !== "undefined" && navigator.product === "ReactNative"
    ? require("./index.mobile")
    : require("./index.web");

module.exports = type;

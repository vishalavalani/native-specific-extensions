import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "route-design-system";

export default function App() {
  _onClick = () => {
    Alert.alert("I am being hit!");
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onClick={this._onClick} title="Hit Me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

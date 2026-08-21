import React from "react";
import { WebView } from "react-native-webview";

export default function GameScreen() {
  return (
    <WebView
      source={{
        uri: "https://ubiquitous-sable-590fff.netlify.app/",
      }}
    />
  );
}

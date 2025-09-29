import React from "react";
import { Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "default" | "defaultSemiBold" | "title";
};

export function ThemedText({ type = "default", style, ...rest }: ThemedTextProps) {
  let textStyle = {};
  if (type === "defaultSemiBold") {
    textStyle = { fontWeight: "600", fontSize: 16 };
  } else if (type === "title") {
    textStyle = { fontWeight: "bold", fontSize: 20 };
  } else {
    textStyle = { fontSize: 14 };
  }

  return <Text style={[textStyle, style]} {...rest} />;
}

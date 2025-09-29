// src/components/StudentItem.tsx
import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";

type StudentItemProps = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  onPress: () => void;
};

export default function StudentItem({
  id,
  name,
  email,
  avatar,
  onPress,
}: StudentItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: avatar || "https://via.placeholder.com/60" }}
        style={styles.avatar}
      />
      <ThemedView style={styles.info}>
        <ThemedText type="defaultSemiBold">{name}</ThemedText>
        <ThemedText type="default">{email}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
});

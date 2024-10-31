import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { useNavigation } from "@react-navigation/native";
export default function Header() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleNavigate() {
    navigation.navigate("favorites");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        width={50}
        height={50}
        source={require("../../assets/images/logo.png")}
      />
      <Pressable style={styles.menu} onPress={handleNavigate}>
        <Feather name="bookmark" size={24} color="#fff" />
      </Pressable>
    </SafeAreaView>
  );
}

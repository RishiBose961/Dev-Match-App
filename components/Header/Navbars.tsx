import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Navbars() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-center items-center p-2">
        <Text className="text-2xl font-bold">DevMatch</Text>
      </View>
    </SafeAreaView>
  );
}

import { Text, View } from "react-native";

export default function Schedule() {
  return (
    <View>
        <View className="flex flex-row justify-center items-center p-4">
            <Text className="text-2xl font-bold">Schedule</Text>
        </View>
        <View className="p-4">
            <Text className="text-lg">This is the schedule page.</Text>
        </View>
    </View>
  );
}
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text className=" text-2xl font-bold text-red-500">
          Welcome to the Expo Router App
        </Text>
        <Text>This is the home page.</Text>
        <Link href="/home" push>
          Go to Home
        </Link>
      </View>
    </SafeAreaView>
  );
}

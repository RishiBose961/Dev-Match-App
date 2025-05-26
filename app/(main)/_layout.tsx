import Navbars from "@/components/Header/Navbars";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <>
      <Navbars />
      <Tabs>
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            title: "Find Devs",
            tabBarIcon: () => <Feather name="users" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="(room)"
          options={{
            headerShown: false,
            title: "Room",
            tabBarIcon: () => <Feather name="tv" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="(schedule)"
          options={{
            headerShown: false,
            title: "Schedule",
            tabBarIcon: () => (
              <MaterialIcons name="calendar-month" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

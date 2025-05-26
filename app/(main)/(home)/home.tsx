import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Devs from "./devs";

const arr = [
  {
    _id: "user1",
    name: "Alice Johnson",
    username: "alicej",
    userDetails: {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      skills: ["React", "Node.js", "GraphQL"],
      availability: "Weekdays 9am - 5pm",
    },
    experience: {
      position_at: "Frontend Developer",
      company: "TechCorp",
    },
  },
  {
    _id: "user2",
    name: "Bob Smith",
    username: "bobsmith",
    userDetails: {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      skills: ["Python", "Django", "Docker"],
      availability: "Evenings & Weekends",
    },
    experience: null,
  },
  {
    _id: "user3",
    name: "Charlie Lee",
    username: "charliel",
    userDetails: {
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      skills: [],
      availability: undefined,
    },
    experience: {
      position_at: "DevOps Engineer",
      company: "CloudSync",
    },
  },
  {
    _id: "user4",
    name: "Bob Smith SDSAA",
    username: "bobsmithDSDS",
    userDetails: {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      skills: ["Python", "Django", "Docker"],
      availability: "Evenings & Weekends",
    },
    experience: null,
  },
    {
    _id: "user5",
    name: "Bob SADAS",
    username: "bobsmithDSDS",
    userDetails: {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      skills: ["Python", "Django", "Docker"],
      availability: "Evenings & Weekends",
    },
    experience: null,
  },
];

export default function Home() {
  return (
    
      <View>
        <View >
          <FlatList
            data={arr}
            keyExtractor={(item) => item._id}
            ListHeaderComponent={
              <Text className="text-xl font-bold mb-4">Developers</Text>
            }
            renderItem={({ item }) => (
              <Devs
                item={item}
                nofounduserDetails={
                  !item?.userDetails || !item.userDetails.skills?.length
                }
              />
            )}
            contentContainerStyle={{ padding: 16 }}
          />
        </View>
      </View>
    
  );
}

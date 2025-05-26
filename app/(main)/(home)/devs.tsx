import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

type UserDetails = {
  image?: string;
  skills?: string[];
  availability?: string;
};

type Experience = {
  position_at?: string;
  company?: string;
};

type DevItem = {
  _id?: string;
  name?: string;
  userDetails?: UserDetails;
  experience?: Experience | null;
};

type DevsProps = {
  item: DevItem;
  nofounduserDetails: boolean;
};

export default function Devs({ item, nofounduserDetails }: DevsProps) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Image
          source={{ uri: item?.userDetails?.image }}
          className="w-12 h-12 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-lg font-semibold">{item?.name}</Text>
          <Text className="text-sm text-gray-500">
            {item?.experience === null
              ? "No Experience"
              : `${item?.experience?.position_at} • ${item?.experience?.company}`}
          </Text>
        </View>
      </View>

      {/* Skills */}
      <View className="flex-row flex-wrap mb-3">
        {nofounduserDetails ? (
          <Text className="text-gray-500">No Skill Found</Text>
        ) : (
          (item?.userDetails?.skills ?? []).map((skill) => (
            <View
              key={skill}
              className="border border-primary text-primary rounded-full px-2 py-1 mr-2 mb-2"
            >
              <Text className="text-xs">{skill}</Text>
            </View>
          ))
        )}
      </View>

      {/* Availability */}
      <View className="flex-row items-center mb-4">
        <Feather name="calendar" size={16} />
        <Text className="ml-2 text-sm text-gray-600">
          <Text className="font-medium">Availability:</Text>{" "}
          {nofounduserDetails
            ? "No Availability Found"
            : item?.userDetails?.availability}
        </Text>
      </View>

      {/* Actions */}
      <View className=" flex-1 flex-row justify-between  items-center">
        <TouchableOpacity className="flex-1 items-center justify-center  py-2 border border-gray-300 rounded-md">
          <Text className="text-sm text-gray-600">Connect</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 items-center justify-center mx-2 py-2 border border-gray-300 rounded-md">
          <Text className="text-sm text-gray-600">Message</Text>
        </TouchableOpacity>

        {/* <ScheduleSession user={item?._id} /> */}

        <TouchableOpacity className="flex-1 items-center justify-center  py-2 border border-gray-300 rounded-md">
          <EvilIcons name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentListScreen from "../screens/StudentListScreen";
import StudentDetailScreen from "../screens/StudentDetailScreen";
import { Student } from "../data/students";

// Khai báo các route và params
export type RootStackParamList = {
  StudentList: undefined;
  StudentDetail: { student: Student };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StudentList"
          component={StudentListScreen}
          options={{ title: "Students" }}
        />
        <Stack.Screen
          name="StudentDetail"
          component={StudentDetailScreen}
          options={{ title: "Student Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

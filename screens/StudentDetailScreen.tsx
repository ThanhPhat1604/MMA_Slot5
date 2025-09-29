// src/screens/StudentDetailScreen.tsx
import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Course } from "../data/students";

type StudentDetailRouteProp = RouteProp<RootStackParamList, "StudentDetail">;

const StudentDetailScreen = () => {
  const route = useRoute<StudentDetailRouteProp>();
  const { student } = route.params;

  // Group courses theo category
  const groupedCourses = useMemo(() => {
    const groups: { [key: string]: Course[] } = {};
    student.courses.forEach((course) => {
      if (!groups[course.category]) groups[course.category] = [];
      groups[course.category].push(course);
    });

    return Object.keys(groups).map((category) => ({
      title: category,
      data: groups[category],
    }));
  }, [student]);

  return (
    <View style={styles.container}>
      {/* Thông tin sinh viên */}
      <Image source={{ uri: student.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.email}>{student.email}</Text>

      {/* SectionList khóa học */}
      <SectionList
        sections={groupedCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDuration}>{item.duration}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        stickySectionHeadersEnabled={true} // Bonus: header dính
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#f1f1f1",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  courseItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  courseDuration: {
    fontSize: 14,
    color: "gray",
  },
});

export default StudentDetailScreen;

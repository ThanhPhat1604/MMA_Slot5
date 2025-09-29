import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Text,
} from "react-native";
import { students as mockStudents, Student } from "../data/students"; // ✅ import đúng
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";
import StudentItem from "../components/StudentItem";

type StudentListNavProp = StackNavigationProp<
  RootStackParamList,
  "StudentList"
>;

const PAGE_SIZE = 10;
const TOTAL = mockStudents.length;

export default function StudentListScreen() {
  const navigation = useNavigation<StudentListNavProp>();

  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 🔹 Fake API fetch
  const fetchStudents = async (pageNum: number) => {
    const start = (pageNum - 1) * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, TOTAL);
    return mockStudents.slice(start, end);
  };

  const loadPage = useCallback(
    async (pageNum: number) => {
      if (loadingMore) return;
      if (!hasMore) return;

      console.log("🔄 Load page:", pageNum);
      setLoadingMore(true);

      // fake delay 300ms để thấy spinner
      await new Promise((res) => setTimeout(res, 300));

      const data = await fetchStudents(pageNum);

      if (pageNum === 1) {
        setStudents(data);
      } else {
        setStudents((prev) => [...prev, ...data]);
      }

      setPage(pageNum);
      setHasMore(data.length > 0 && pageNum * PAGE_SIZE < TOTAL);

      setLoadingMore(false); // ✅ luôn reset
    },
    [loadingMore, hasMore]
  );

  const handleEndReached = useCallback(() => {
    if (loadingMore || !hasMore) return;
    loadPage(page + 1);
  }, [loadingMore, hasMore, page, loadPage]);

  const refreshStudents = async () => {
    setRefreshing(true);
    await loadPage(1);
    setRefreshing(false);
  };

  useEffect(() => {
    loadPage(1);
  }, []);

  return (
    <FlatList
      data={students}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <StudentItem
          id={item.id}
          name={item.name}
          email={item.email}
          avatar={item.avatar}
          onPress={() =>
            navigation.navigate("StudentDetail", { student: item })
          }
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshStudents} />
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.2} // ✅ giảm để tránh gọi quá sớm
      ListFooterComponent={() =>
        loadingMore ? (
          <ActivityIndicator style={{ margin: 10 }} />
        ) : !hasMore ? (
          <Text style={{ textAlign: "center", padding: 10 }}>
            ✅ No more students available
          </Text>
        ) : null
      }
    />
  );
}

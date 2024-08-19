import BarChart from "@/components/dashboard/BarChart";
import CardFlatList from "@/components/dashboard/CardFlatList";
import CardLine from "@/components/dashboard/CardLine";
import LineChart from "@/components/dashboard/LineChart";
import ListItem from "@/components/dashboard/ListItem";
import { PieChartExmaple } from "@/components/dashboard/PieChart";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <CardLine />
      <CardFlatList />
      <PieChartExmaple />
      <LineChart/>
      <ListItem />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

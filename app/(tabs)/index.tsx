import CardFlatList from "@/components/dashboard/CardFlatList";
import { useIndicator } from "@/components/dashboard/hooks/useDashaboard";
import ListItem from "@/components/dashboard/ListItem";
import { PieChartComponent } from "@/components/dashboard/PieChart";
import moment from "moment";
import { ScrollView, StyleSheet } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";

export default function HomeScreen() {
  const month = moment().subtract(1, "months").format("MM");
  const { data, isLoading, refetch, isRefetching } = useIndicator({ month });

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />
    }>
      <CardFlatList />
      <PieChartComponent active_sales={data?.ventas_activas ?? 0} pending_sales={data?.ventas_pendientes ?? 0} />
      {/*   <LineChart/> */}
      <ListItem data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

import BarChart from '@/components/dashboard/BarChart';
import CardFlatList from '@/components/dashboard/CardFlatList';
import CardLine from '@/components/dashboard/CardLine';
import { PieChartExmaple } from '@/components/dashboard/PieChart';
import ListItem from '@/components/ListItem';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {
  return (


    <ScrollView>
      <CardLine />
      <CardFlatList />
      <PieChartExmaple />
      <ListItem />
  </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

});

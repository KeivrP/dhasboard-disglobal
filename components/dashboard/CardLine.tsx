import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDataRickyandMorty } from "./hooks/useDashaboard";
import useInternetConnection from "@/hooks/useConnection";
import { Loading } from "../ui/loading/Loading";
const API = process.env.EXPO_PUBLIC_API_URL;


const datas = [
  { id: "5", title: "Promedio diario", value: "48" },
  { id: "6", title: "Meta Estimada", value: "1077" },
];

const CardLine = () => {
  const isConnected = useInternetConnection()
  console.log("isConnected", isConnected);
  const { data, isLoading, error, refetch, isRefetching } = useDataRickyandMorty();

  return (
    <View style={styles.container}>
      <Text style={styles.badgeValue}>{data?.info.count}</Text>
      <Text style={styles.badgeValue}>{API}</Text>
      {isLoading || isRefetching && <Loading/>}
      {isConnected && <Text style={{color: 'white'}}>Conectado</Text>}
      {error && <Text style={{color: 'white'}} >{JSON.stringify(error)}</Text>}
      {error && <Text style={{color: 'white'}} >{error.message}</Text>}
      {error && <Text style={{color: 'white'}} >{error.name}</Text>}
      {error && <Text style={{color: 'white'}} >{error.stack}</Text>}
      <TouchableOpacity onPress={() => refetch()}>
        <Text style={styles.badge}> Presionaaa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  badge: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    margin: 5,
    borderRadius: 15,
    color: "#fff",
    backgroundColor: "#232B5D",
  },
  badgeTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,
  },
  badgeValue: {
    fontSize: 16,
    color: "#93FCF8",
  },
  separator: {
    height: 5,
    backgroundColor: "#f1f1f1",
  },
});

export default CardLine;

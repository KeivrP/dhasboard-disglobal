import React, { useRef, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomModal, { BottomModalRef } from "../BackdropSheet";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { ModalSheet } from "../ModalSheet";
import BarChartComponents from "./BarChart";
import { IndicadoresApi, ReportsName, Value } from "./Dashboard-type";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { backgroundCard } from "@/constants/Colors";

interface props {
  data: IndicadoresApi | undefined
}

export default function ListItem({ data }: props) {
  const modalRef = useRef<BottomModalRef>(null);
  const [item, setItem] = useState<Value>({ value: "", name: "" });
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    modalRef.current?.close();
  };

  const HandleReports = (item: Value) => {
    setModalVisible(true);
    setItem(item);
    handleClose();
  };

  const handleCloseModal = () => {

    setModalVisible(false);
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => modalRef.current?.open()}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>Seleccionar Reporte</Text>
      </TouchableOpacity>
      <BottomModal snapPoint={400} ref={modalRef}>
        <FlatList
          scrollEnabled={false}
          data={ReportsName}
          contentContainerStyle={styles.contentContainer}
          //keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                HandleReports(item);
              }}
              style={{ marginVertical: 15, marginLeft: 5, width: "100%" }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "black",
                    marginTop: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </BottomModal>

      <ModalSheet isVisible={modalVisible} centerVertical="center">
        <View style={{
          justifyContent: 'space-between', flexDirection: "row",
        }}>
          <Text style={styles.title}>{item.name}</Text>
          <Pressable onPress={() => handleCloseModal()}>
            <TabBarIcon name={'close'} color={'white'} />
          </Pressable>
        </View>
        <View>
          <BarChartComponents type={item} data={data} />
        </View>
      </ModalSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
  contentContainer: {
    alignSelf: "center",
    alignItems: "stretch",
    marginTop: 16,
    minWidth: widthPercentageToDP("80%"),
    gap: 16,
  },
  button: {
    backgroundColor: backgroundCard,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
});

import React, { useRef, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomModal, { BottomModalRef } from "../BackdropSheet";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { ModalSheet } from "../ModalSheet";
import { BarChart } from "react-native-gifted-charts";
import BarChartNegocio from "./BarChart";

const data = [
  "Reporte 1",
  "Reporte 2",
  "Reporte 3",
  "Reporte 4",
  "Reporte 5",
  "Reporte 6",
];

export default function ListItem() {
  const modalRef = useRef<BottomModalRef>(null);
  const [type, setType] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    modalRef.current?.close();
  };

  const HandleReports = (item: string) => {
    setModalVisible(true);
    setType(item);
    handleClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => modalRef.current?.open()}
      >
        <Text style={{ color: "#fff" }}>Seleccionar Reporte</Text>
      </TouchableOpacity>
      <BottomModal snapPoint={400} ref={modalRef}>
        <FlatList
          scrollEnabled={false}
          data={data}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item) => item}
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
                  {item}
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
        <View>
          <BarChartNegocio type={type} />
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </ModalSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
  },
  contentContainer: {
    alignSelf: "center",
    alignItems: "stretch",
    marginTop: 16,
    minWidth: widthPercentageToDP("80%"),
    gap: 16,
  },
  button: {
    backgroundColor: "#232B5D",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
});

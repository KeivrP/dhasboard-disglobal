import React, { useMemo, useRef } from 'react';
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Loading } from './ui/loading/Loading';

export type FormSelectProps = {
  options: string[]
  value: string
  placeholder: string
  onChange: (val: string) => void
  isLoading?: boolean
  isEdit?: boolean
};

export const FormSelect = ({ options, value, onChange, placeholder, isLoading = false, isEdit = false }: FormSelectProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => [400, '80%'], []);

  const openSheet = () => {
    Keyboard.dismiss();
    bottomSheetModalRef.current?.present();
  };

  const closeModal = () => bottomSheetModalRef.current?.dismiss();

  return (
    <View style={{ marginVertical: 24 }}>
      <TouchableOpacity onPress={isEdit ? () => { } : openSheet} style={styles.container}>
        <TextInput
          multiline
          placeholderTextColor="#767984"
          editable={false}
          value={value}
          style={{ textTransform: 'capitalize', width: '80%' }}
          placeholder={placeholder}
        />
        <MaterialIcons name="keyboard-arrow-down" style={styles.iconSelect} />
      </TouchableOpacity>
      <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
        {isLoading
          ? <Loading />
          : <BottomSheetFlatList
            data={options}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    closeModal();
                    onChange(item);
                  }}
                  style={{ marginVertical: 15, marginLeft: 5 }}
                >
                  <View>
                    <Text style={{ fontSize: 18, textAlign: 'center', textTransform: 'capitalize' }}>{item}</Text>
                    <View style={{ height: 1, backgroundColor: 'black', marginTop: 10 }} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />}
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    backgroundColor: '#D9E1FF',
    height: 50,
    padding: 5,
    borderRadius: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconSelect: {
    fontSize: heightPercentageToDP('4%'),
    color: '#000'
  }
});


{/* <FormSelect
isEdit={false}
placeholder="Seleccionar Reporte"
options={['Reporte 1', 'Reporte 2', 'Reporte 3']}
isLoading={false}
onChange={(val) => {
    console.log(val);
}}
value={''}
/> */}


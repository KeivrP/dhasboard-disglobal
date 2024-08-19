import React, { type ReactNode } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';

export interface ModalSheetProps {
  isVisible: boolean
}

interface ModalDesignContainerProps extends ModalSheetProps {
  children: ReactNode
  centerVertical?: 'top' | 'center'
}

export function ModalSheet({
  children,
  isVisible,
  centerVertical = 'center'
}: ModalDesignContainerProps): JSX.Element {
  const verticalAlign = centerVertical === 'center' ? styles.centeredView : styles.topView;

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View style={verticalAlign}>
          <View style={styles.modalView}>
            <View style={styles.inset}>
              <ScrollView contentContainerStyle={styles.stack}>{children}</ScrollView>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta el último valor para controlar la opacidad
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    maxHeight: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center'
  },
  topView: {
    justifyContent: 'center'
  },
  inset: {
    padding: 19
  },
  stack: {
    flexGrow: 1,
    justifyContent: 'space-between'
  }
});

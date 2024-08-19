import React from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ButtonMenuDrawer = () => {
/*   const rootNavigation = useRootNavigation();
 */  return (
    <Pressable
      onPress={() => {
     /*rootNavigation.openDrawer(); */      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1
      })}
      >
      <Feather
        name="menu"
        size={25}
        color="#000"
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ButtonMenuDrawer } from "@/components/ButtonMenuDrawer";
import { ImageLogo } from "@/components/ui/logo";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useInternetConnection from "@/hooks/useConnection";
import { DrawerToggleButton } from "@react-navigation/drawer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isConnected = useInternetConnection();
  console.log("isConnected", isConnected);

  const queryClient = new QueryClient();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (true) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack
              screenOptions={{
                title: "Disglobal",
                headerStyle: {
                  backgroundColor: "#F1F4FF",
                },
                headerLeft: () => <ImageLogo />,
                headerTitle: "",
                //headerRight: () =><DrawerToggleButton tintColor='#000' />,
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            >
              <Stack.Screen name="(tabs)"  />
              <Stack.Screen name="+not-found" />
            </Stack>
            <Toast />
          </ThemeProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

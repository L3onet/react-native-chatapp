import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./src/contexts";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <NativeBaseProvider>
          <AuthProvider>
            <View style={styles.container}>
              <HandlerNavigation />
              <StatusBar style="auto" />
            </View>
          </AuthProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { screens, initSockets } from "../utils";
import {
    UserProfileScreen,
    CameraScreen,
    ImageFullScreen,
} from "../screens/Global";
import { ChatScreen } from "../screens/Chats";
import { styles } from "./Styles.styles";

initSockets();

const Stack = createNativeStackNavigator();

export function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.tab.root} 
            component={BottomTabNavigation} 
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name={screens.global.chatScreen}
                component={ChatScreen}
                options={{ headerShown: false, ...styles.stackNavigationStyles }}
            />
            <Stack.Group
                screenOptions={{ presentation: "modal", ...styles.modalStyles }}
            >
                <Stack.Screen
                    name={screens.global.userProfileScreen}
                    component={UserProfileScreen}
                    options={{ title: "Info. del usuario" }}
                />
                <Stack.Screen
                    name={screens.global.cameraScreen}
                    component={CameraScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={screens.global.imageFullScreen}
                    component={ImageFullScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}
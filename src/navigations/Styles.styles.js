import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  stackNavigationStyles: {
    contentStyle: {
      backgroundColor: "#000",
    },
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTitleStyle: {
      color: "#fff",
    },
    headerShadowVisible: false,
  },
  modalStyles: {
    contentStyle: {
      backgroundColor: "#171717",
    },
    headerStyle: {
      backgroundColor: "#171717",
    },
    headerTitleStyle: {
      color: "#fff",
    },
    headerShadowVisible: false,
  },
  chatBubble: {
    sent: {
      backgroundColor: "#DCF8C6",
      borderRadius: 8,
      padding: 8,
      marginVertical: 4,
      marginHorizontal: 8,
      maxWidth: "80%",
      alignSelf: "flex-end",
    },
    received: {
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 8,
      marginVertical: 4,
      marginHorizontal: 8,
      maxWidth: "80%",
      alignSelf: "flex-start",
    },
  },
  chatInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    height: 60,
  },
  tabBarIcon: {
    color: "#075E54",
  },
  tabBarActiveIcon: {
    color: "#075E54",
  },
  tabBarInactiveIcon: {
    color: "#757575",
  },
  listItem: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    padding: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusBar: {
    backgroundColor: "#075E54",
  },
});
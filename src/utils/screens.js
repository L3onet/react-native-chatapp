const auth = {
    authStartScreen: "AuthStartScreen",
    loginScreen: "LoginScreen",
    registerScreen: "RegisterScreen",
  };
  
  const global = {
    userProfileScreen: "UserProfileScreen",
    cameraScreen: "CameraScreen",
    imageFullScreen: "ImageFullScreen",
    chatScreen: "ChatScreen",
  };
  
  const chats = {
    root: "ChatsRoot",
    chatsScreen: "ChatsScreen",
    createChatScreen: "CreateChatScreen",
  };
  
  const settings = {
    root: "SettingsRoot",
    settingScreen: "SettingsScreen",
    changeFirstnameScreen: "ChangeFirstnameScreen",
    changeLastnameScreen: "ChangeLastnameScreen",
  };
  
  export const screens = {
    auth,
    global,
    tab: {
      root: "BottomTabRoot",
      chats,
      settings,
    },
  };
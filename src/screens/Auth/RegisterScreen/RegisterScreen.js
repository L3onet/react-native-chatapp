import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/Auth";

export function RegisterScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Crea tu cuenta y empieza a enviar mensajes
            </Text>

            <RegisterForm />

            <Text style={styles.register} onPress={navigation.goBack}>
                Iniciar sesión
            </Text>
        </View>
    )
}

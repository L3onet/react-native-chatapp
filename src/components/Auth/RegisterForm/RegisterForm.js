import React from 'react';
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Input, InputField, Button, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { styles } from "./RegisterForm.styles";

const authController = new Auth();

export function RegisterForm() {
    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authController.register(formValue.email, formValue.password);
                navigation.goBack();
            } catch (error) {
                console.error(error);
            }
        },
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, justifyContent: "center" }}
        >
            <View style={styles.container}>
                <Input>
                    <InputField
                        placeholder="Correo electrónico"
                        autoCapitalize="none"
                        value={formik.values.email}
                        onChangeText={(text) => formik.setFieldValue("email", text)}
                        isInvalid={!!formik.errors.email}
                        color="$white"
                    />
                </Input>
                <Input mt="$3" isInvalid={!!formik.errors.password}>
                    <InputField
                        placeholder="Contraseña"
                        secureTextEntry
                        value={formik.values.password}
                        onChangeText={(text) => formik.setFieldValue("password", text)}
                        color="$white"
                    />
                </Input>
                <Button mt="$4" onPress={formik.handleSubmit} isDisabled={formik.isSubmitting}>
                    <Text color="$white">CREAR CUENTA</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
}

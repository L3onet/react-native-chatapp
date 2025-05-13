import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Input, InputField, Button, Text } from "@gluestack-ui/themed";
import { initialValues, validationSchema } from "./ChangeFirstnameScreen.form";
import { useFormik } from "formik";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";
import { useNavigation } from "@react-navigation/native";
import { styles } from './ChangeFirstnameScreen.styles';

const userController = new User();

export function ChangeFirstnameScreen() {
    const navigation = useNavigation();
    const { accessToken, updateUser } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const dataUser = { firstname: formValue.firstname };
                await userController.updateUser(accessToken, dataUser);
                updateUser("firstname", formValue.firstname);
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
            <View style={styles.content}>
                <Input>
                    <InputField
                        placeholder="Nombre"
                        autoFocus
                        value={formik.values.firstname}
                        onChangeText={(text) => formik.setFieldValue("firstname", text)}
                        isInvalid={!!formik.errors.firstname}
                        color="$white"
                    />
                </Input>
                <Button mt="$4" onPress={formik.handleSubmit} isDisabled={formik.isSubmitting}>
                    <Text color="$white">Cambiar</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}
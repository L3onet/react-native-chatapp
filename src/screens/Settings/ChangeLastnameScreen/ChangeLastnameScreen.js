import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Input, InputField, Button, Text } from "@gluestack-ui/themed";
import { initialValues, validationSchema } from './ChangeLastnameScreen.form';
import { useFormik } from 'formik';
import { User } from "../../../api";
import { useAuth } from "../../../hooks";
import { useNavigation } from "@react-navigation/native";
import { styles } from './ChangeLastnameScreen.styles';

const userController = new User();

export function ChangeLastnameScreen() {
    const navigation = useNavigation();
    const { accessToken, updateUser } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const dataUser = { lastname: formValue.lastname };
                await userController.updateUser(accessToken, dataUser);
                updateUser("lastname", formValue.lastname);
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
                        placeholder="Apellidos"
                        autoFocus
                        value={formik.values.lastname}
                        onChangeText={(text) => formik.setFieldValue("lastname", text)}
                        isInvalid={!!formik.errors.lastname}
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

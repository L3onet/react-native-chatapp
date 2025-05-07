import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from "native-base";
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
        <View>
            <Input
                placeholder="Apellidos"
                variant="unstyled"
                autoFocus
                value={formik.values.lastname}
                onChangeText={(text) => formik.setFieldValue("lastname", text)}
                style={[styles.input, formik.errors.lastname && styles.inputError]}
            />
            <Button
                style={styles.btn}
                onPress={formik.handleSubmit}
                isLoading={formik.isSubmitting}
            >
                Cambiar
            </Button>

        </View>
    )
}

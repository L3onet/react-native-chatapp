import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Input, InputField, Button, Text } from "@gluestack-ui/themed";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { useAuth } from "../../../hooks";
import { initialValues, validationSchema } from "./LoginForm.form";
import { styles } from "./LoginForm.styles";

const authController = new Auth();

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authController.login(
          formValue.email,
          formValue.password
        );
        const { access, refresh } = response;
        await authController.setAccessToken(access);
        await authController.setRefreshToken(refresh);
        await login(access);
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
        <Button
          mt="$4"
          onPress={formik.handleSubmit}
          isDisabled={formik.isSubmitting}
        >
          <Text color="$white">ENTRAR</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

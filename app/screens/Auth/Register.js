import React from "react";

import { Image, StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";

import Wrapper from "../../components/Wrapper";
import { Form, FormField, SubmitButton } from "../../components/Form";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Register = () => {
  const handleRegistration = async ({ email, password }) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          source={require("../../../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text
          style={{
            fontSize: 30,
            paddingBottom: 5,
          }}
        >
          Sign in to your account
        </Text>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleRegistration}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            style={{
              height: 50,
            }}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            style={{
              height: 50,
            }}
          />
          <SubmitButton title="Register" color="secondary" />
        </Form>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
});

export default Register;

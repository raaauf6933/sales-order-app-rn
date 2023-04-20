import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Wrapper from "../../components/Wrapper";
import { Form, FormField, SubmitButton } from "../../components/Form";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

import { useAuth } from "../../context/Auth/context";

import { db } from "./../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
  const { login } = useAuth();

  const handleLogin = async ({ email, password }) => {
    await login({ email, password });
  };

  return (
    <Wrapper style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          source={require("../../../assets/logo-red.png")}
          style={styles.logo}
        />

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
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
          <SubmitButton
            title="Login"
            style={{
              height: 50,
            }}
          />
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

export default Login;

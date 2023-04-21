import React, { useEffect } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as Yup from "yup";

import Wrapper from "../../components/Wrapper";
import { Form, FormField, SubmitButton } from "./../../components/Form";
import colors from "../../config/colors";

import { useAuth } from "../../context/Auth/context";

import { db } from "./../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import routes from "../../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = ({ navigation }) => {
  const { login, error, loading, dispatch } = useAuth();

  useEffect(() => {
    dispatch({ type: "SET_ERROR", payload: false });
  }, []);

  const handleLogin = async ({ email, password }) => {
    await login({ email, password, role: "CUSTOMER" });
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
          {error ? (
            <View>
              <Text
                style={{
                  color: colors.danger,
                  fontSize: 20,
                  fontWeight: "600",
                  padding: 6,
                }}
              >
                *Email or Password is incorrect*
              </Text>
            </View>
          ) : null}
          <SubmitButton
            title="Login"
            style={{
              height: 50,
            }}
            disabled={loading}
            loading={loading}
          />
        </Form>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.ADMIN_LOGIN)}
        >
          <View>
            <Text
              style={{
                marginTop: 23,
                color: colors.secondary,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Login as store admin
            </Text>
          </View>
        </TouchableOpacity>
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

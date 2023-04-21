import React from "react";
import { useAuth } from "./../../context/Auth/context";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import * as Yup from "yup";

import Wrapper from "../../components/Wrapper";
import { Form, FormField, SubmitButton } from "../../components/Form";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  address: Yup.string().required().label("Address"),
  contact_number: Yup.number().required().label("Contact Number"),
});

const Register = () => {
  const { register, loading } = useAuth();
  const handleRegistration = async (form) => {
    try {
      await register(form);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper style={styles.container}>
      <ScrollView>
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
            Create New Account
          </Text>
          <Form
            initialValues={{
              first_name: "",
              last_name: "",
              address: "",
              email: "",
              contact_number: "",
              password: "",
            }}
            onSubmit={handleRegistration}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="form-textbox"
              name="first_name"
              placeholder="First Name"
              style={{
                height: 50,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="form-textbox"
              name="last_name"
              placeholder="Last Name"
              style={{
                height: 50,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="map-marker"
              name="address"
              placeholder="Address"
              style={{
                height: 50,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="phone"
              name="contact_number"
              placeholder="Contact Number"
              style={{
                height: 50,
              }}
            />
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
              title="Register"
              color="secondary"
              disabled={loading}
              loading={loading}
            />
          </Form>
        </View>
      </ScrollView>
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

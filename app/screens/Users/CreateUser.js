import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Wrapper from "../../components/Wrapper";
import * as Yup from "yup";
import colors from "../../config/colors";
import { useAuth } from "./../../context/Auth/context";
import {
  Form,
  FormField,
  SubmitButton,
  FormImagePicker,
} from "../../components/Form";
import usePost from "../../hooks/usePost";
import routes from "./../../navigation/routes";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().min(4).label("Last Name"),

  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function CreateUser({ navigation }) {
  const { loading, registerUser } = useAuth();

  const handleSave = async (form) => {
    registerUser(form);
  };

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Wrapper>
        <View style={styles.formContainer}>
          <Form
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            onSubmit={handleSave}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="first_name"
              placeholder="First Name"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="last_name"
              placeholder="Last Name"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <SubmitButton
              title="Save"
              style={{
                height: 50,
              }}
              color="secondary"
              loading={loading}
              disabled={loading}
            />
          </Form>
        </View>
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 10,
  },
});

export default CreateUser;

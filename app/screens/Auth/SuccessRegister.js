import { StyleSheet, View, Text } from "react-native";
import Wrapper from "../../components/Wrapper";
import AppButton from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

import routes from "../../navigation/routes";

function SuccessRegister(props) {
  const { navigation } = props;

  return (
    <Wrapper>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={"check-circle"}
          size={84}
          color={colors.secondary}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Account Successfully Registered!</Text>
          <Text style={styles.subTitle}>Now login to your account.</Text>
        </View>

        <View style={{ width: "100%", paddingHorizontal: 34 }}>
          <AppButton
            title="Back to Login"
            color="secondary"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 17,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    marginBottom: 5,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "200",
  },
});

export default SuccessRegister;

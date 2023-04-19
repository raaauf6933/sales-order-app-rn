import { StyleSheet, View, Text, Image } from "react-native";
import Wrapper from "../../components/Wrapper";
import ListButton from "../../components/ListButton";
import routes from "../../navigation/routes";
import colors from "../../config/colors";

const buttons = [
  {
    label: "Edit Profile",
    nav_screen: routes.LISTINGS,
  },
  {
    label: "Log-out",
    nav_screen: routes.LISTINGS,
    style: {
      color: colors.danger,
      fontWeight: "bold",
    },
  },
];

function MyAccount() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image
            source={require("./../../../assets/default_avatar.png")}
            style={styles.image}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.title}>Juan Dela Cruz</Text>
            <Text style={styles.email}>jdelacruz@gmail.com</Text>
          </View>
        </View>

        <ListButton buttons={buttons} />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
  },
  email: {
    fontSize: 20,
    fontWeight: "200",
  },
  avatar: {
    alignItems: "center",
    paddingTop: 60,
  },
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default MyAccount;

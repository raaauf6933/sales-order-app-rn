import { StyleSheet, View, Text, Image } from "react-native";
import Wrapper from "../../components/Wrapper";
import ListButton from "../../components/ListButton";
import routes from "../../navigation/routes";
import colors from "../../config/colors";
import { useAuth } from "../../context/Auth/context";
import { useEffect, useState } from "react";

const buttons = (actions) => {
  return [
    {
      label: "Edit Profile",
      nav_screen: routes.LISTINGS,
    },
    {
      label: "My Orders",
      nav_screen: routes.LISTINGS,
    },
    {
      label: "Log-out",
      nav_screen: routes.LISTINGS,
      style: {
        color: colors.danger,
        fontWeight: "bold",
      },
      action: () => actions.logout(),
    },
  ];
};

function MyAccount() {
  const { logout, getUser } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    const checkUser = async () => {
      const result = await getUser();
      setUser(result);
    };

    checkUser();
  }, []);

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
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>

        <ListButton buttons={buttons({ logout })} />
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

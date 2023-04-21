import { StyleSheet, View, Text, Image } from "react-native";
import Wrapper from "../../components/Wrapper";
import ListButton from "../../components/ListButton";
import routes from "../../navigation/routes";
import colors from "../../config/colors";
import { useAuth } from "../../context/Auth/context";
import { useEffect, useState } from "react";

const customerButtons = (actions) => {
  return [
    // {
    //   key: 1,
    //   label: "Edit Profile",
    //   nav_screen: routes.LISTINGS,
    // },
    // {
    //   key: 2,
    //   label: "My Orders",
    //   nav_screen: routes.LISTINGS,
    // },
    {
      key: 3,
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

const adminButtons = (actions) => {
  return [
    // {
    //   key: "0",
    //   label: "Edit Profile",
    //   nav_screen: routes.LISTINGS,
    //   icon: "account-edit-outline",
    // },
    {
      key: "1",
      label: "Log-out",
      nav_screen: routes.LISTINGS,
      style: {
        color: colors.danger,
        fontWeight: "bold",
      },

      icon: "logout",
      action: () => actions.logout(),
    },
  ];
};

function MyAccount() {
  const { logout, state } = useAuth();

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image
            source={require("./../../../assets/default_avatar.png")}
            style={styles.image}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.title}>
              {state.first_name} {state.last_name}
            </Text>
            <Text style={styles.email}> {state.email}</Text>
          </View>
        </View>

        <ListButton buttons={adminButtons({ logout })} />
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

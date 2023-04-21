import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Avatar, ListItem } from "@rneui/base";
import React, { useCallback, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useApi from "./../../hooks/useApi";
import routes from "./../../navigation/routes";

const Users = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { response, refetch } = useApi({
    url: "/users",
  });

  const users = response?.data?.data;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          {users?.map((e) => {
            return (
              <ListItem bottomDivider key={e.email}>
                <Avatar
                  rounded
                  icon={{
                    name: "person-outline",
                    type: "material",
                    size: 26,
                  }}
                  containerStyle={{ backgroundColor: "#c2c2c2" }}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    {e.first_name} {e.last_name}
                  </ListItem.Title>
                  <ListItem.Subtitle>{e.email}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate(routes.CREATE_USER)}
      >
        <MaterialCommunityIcons name="plus" size={30} color="#01a699" />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});

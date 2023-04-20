import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ListItem, Icon, Divider } from "@rneui/base";

function ListButton(props) {
  const { buttons } = props;
  return (
    <View style={styles.container}>
      {buttons.map((item, index, arr) => {
        return (
          <>
            <ListItem onPress={item.action} key={item.key}>
              <Icon name={item.icon} type="material-community" color="grey" />
              <ListItem.Content>
                <ListItem.Title style={[item.style, styles.item]}>
                  {item.label}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            {arr.length - 1 === index ? null : <Divider />}
          </>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    fontSize: 20,
  },
  itemContainer: {
    borderBottomColor: "#d1d1d1",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
});

export default ListButton;

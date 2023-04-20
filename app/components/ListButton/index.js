import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function ListButton(props) {
  const { buttons } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={({ item, index, arr }) => (
          <View style={buttons.lenght === index ? null : styles.itemContainer}>
            <TouchableOpacity onPress={item.action}>
              <Text style={[item.style, styles.item]}>{item.label}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
  itemContainer: {
    borderBottomColor: "#d1d1d1",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
});

export default ListButton;

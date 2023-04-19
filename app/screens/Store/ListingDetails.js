import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity as PlainButton,
} from "react-native";

import Text from "./../../components/Text";
import ListItem from "./../../components/ListItem";
import colors from "./../../config/colors";
import Button from "./../../components/Button";
import { ScrollView } from "react-native-gesture-handler";

function ListingDetailScreen(props) {
  const { route } = props;
  const { image, title, price } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <View>
              <Text numberOfLines={10}>
                Description - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent vulputate tempus sem quis rhoncus. Sed
                pellentesque luctus vestibulum. Sed sagittis hendrerit metus,
                vitae suscipit nisi placerat vitae. Cras convallis molestie
                libero sed
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: 12,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "600" }}>
                Available Stocks:{" "}
              </Text>
              <Text style={{ fontSize: 24, fontWeight: "300" }}>6</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 22 }}>QTY</Text>
              <PlainButton style={[styles.qtyButton, styles.disabledQtyButton]}>
                <Text>-</Text>
              </PlainButton>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                1
              </Text>
              <PlainButton style={[styles.qtyButton]}>
                <Text>+</Text>
              </PlainButton>
            </View>
          </View>
          {/* <View style={styles.userContainer}>
        <ListItem
          image={require("../../assets/mosh.jpg")}
          title="Mosh Hamedani"
          description="5 listings"
        />
      </View> */}
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, styles.disableAddToCart]}>
        <Button title="Add to Cart" color="secondary" onPress={() => null} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, overflow: "scroll" },
  contentContainer: {
    flex: 1,
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  qtyButton: {
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#d1d1d1",
    marginHorizontal: 7,
  },
  disabledQtyButton: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 25,
  },
  description: {},
  title: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 6,
  },
  userContainer: {
    marginTop: 30,
    paddingLeft: 5,
  },
  buttonContainer: {
    width: "100%",
    padding: 15,
  },
  disableAddToCart: {
    opacity: 0.5,
  },
});

export default ListingDetailScreen;

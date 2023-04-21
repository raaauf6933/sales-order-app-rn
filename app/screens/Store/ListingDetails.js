import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity as PlainButton,
} from "react-native";

import Text from "./../../components/Text";
import { useState } from "react";
import colors from "./../../config/colors";
import Button from "./../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useCart } from "../../context/Cart/context";

function ListingDetailScreen(props) {
  const { route } = props;
  const {
    image,
    title,
    price,
    description,
    quantity,
    id,
    product_id,
    product_name,
    selling_price,
  } = route.params;
  const [qty, setQty] = useState(1);
  const { state, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      image,
      product_name,
      price,
      description,
      qty,
      id,
      product_id,
      selling_price,
    });
  };

  const handleAdd = () => {
    setQty((prevState) => {
      if (prevState === quantity) {
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  const handleMinus = () => {
    setQty((prevState) => {
      if (prevState === 1) {
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View
            style={{
              height: 400,
              maxWidth: "100%",
              flex: 1,
            }}
          >
            <Image style={styles.image} source={{ uri: image }} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <View>
              <Text numberOfLines={10}>Description - {description}</Text>
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
              <Text style={{ fontSize: 24, fontWeight: "300" }}>
                {quantity}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 22 }}>Quantity </Text>
              <PlainButton
                style={[
                  styles.qtyButton,
                  qty === 1 ? styles.disabledQtyButton : null,
                ]}
                onPress={handleMinus}
                disabled={qty === 1}
              >
                <Text>-</Text>
              </PlainButton>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                {qty}
              </Text>
              <PlainButton
                style={[
                  styles.qtyButton,
                  qty === quantity || !quantity
                    ? styles.disabledQtyButton
                    : null,
                ]}
                onPress={handleAdd}
                disabled={qty === quantity || !quantity}
              >
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
      <View
        style={[
          styles.buttonContainer,
          quantity < 1 ? styles.disableAddToCart : null,
        ]}
      >
        <Button
          title={quantity > 0 ? "Add to Cart" : "Out of Stock"}
          color={quantity > 0 ? "secondary" : "danger"}
          onPress={quantity > 0 ? handleAddToCart : null}
        />
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
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
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

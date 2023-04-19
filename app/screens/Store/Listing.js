import { StyleSheet, FlatList } from "react-native";

import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";

import PhpFormatter from "../../utils/currencyFormatter";

const listData = [
  {
    id: "1",
    title: "Gentlemans Collection",
    price: PhpFormatter(6999),
    image: require("../../../assets/wine_1.jpg"),
  },
  {
    id: "2",
    title: "CAPERCAILLIE CHARDONNAY",
    price: PhpFormatter(7888),
    image: require("../../../assets/wine_3.jpg"),
  },
  {
    id: "3",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
];

function ListingScreen(props) {
  const { navigation } = props;
  return (
    <Wrapper style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={item.price}
          />
        )}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;

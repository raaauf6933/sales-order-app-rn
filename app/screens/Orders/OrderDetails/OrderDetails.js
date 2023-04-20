import { StyleSheet, View } from "react-native";
import Wrapper from "../../../components/Wrapper";

import colors from "../../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import OrderInfo from "./components/OrderInfo";
import OrderDetails from "./components/OrderDetails";
import { Button, Card } from "@rneui/base";

function OrderDetailsScreen() {
  return (
    <ScrollView>
      <Wrapper style={styles.container}>
        <OrderInfo />
        <OrderDetails />
        <Card>
          <Card.Title style={{ textAlign: "left" }}>Actions</Card.Title>
          <Button>In-Process</Button>
        </Card>
      </Wrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default OrderDetailsScreen;

import { StyleSheet, View } from "react-native";
import Wrapper from "../../../components/Wrapper";

import colors from "../../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import OrderInfo from "./components/OrderInfo";
import OrderDetails from "./components/OrderDetails";
import { Button, Card } from "@rneui/base";
import routes from "../../../navigation/routes";

const MyOrderDetails = (props) => {
  const data = props.route.params;

  return (
    <ScrollView>
      <Wrapper style={styles.container}>
        <OrderInfo data={data} />
        <OrderDetails data={data} />
        <Card>
          <Card.Title style={{ textAlign: "left" }}>Actions</Card.Title>
          <Button
            onPress={() => props.navigation.navigate(routes.RECEIPT, data)}
          >
            View Receipt
          </Button>
        </Card>
      </Wrapper>
    </ScrollView>
  );
};

export default MyOrderDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

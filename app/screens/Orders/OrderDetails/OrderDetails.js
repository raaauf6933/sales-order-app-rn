import { StyleSheet, View } from "react-native";
import Wrapper from "../../../components/Wrapper";
import usePost from "../../../hooks/usePost";
import colors from "../../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import OrderInfo from "./components/OrderInfo";
import OrderDetails from "./components/OrderDetails";
import { Button, Card } from "@rneui/base";
import { getActionButtonLabel } from "../utils";
import useApi from "../../../hooks/useApi";

function OrderDetailsScreen(props) {
  const { response, refetch } = useApi({
    url: "/order",
    method: "POST",
    data: {
      id: props.route.params.id,
    },
  });

  const data = response?.data?.data;

  const [updateStatus, updateStatusOpts] = usePost({
    onComplete: (e) => {
      refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleUpdateStatus = () => {
    updateStatus({
      url: "/update_order_status",
      method: "POST",
      data: {
        id: data.id,
        status: data?.status,
      },
    });
  };

  return (
    <ScrollView>
      <Wrapper style={styles.container}>
        {data ? (
          <>
            <OrderInfo data={data} />
            <OrderDetails data={data} />
            {data?.status === "COMPLETE" ? null : (
              <Card>
                <Card.Title style={{ textAlign: "left" }}>Actions</Card.Title>

                <Button onPress={handleUpdateStatus}>
                  {getActionButtonLabel(data.status)}
                </Button>
              </Card>
            )}
          </>
        ) : null}
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

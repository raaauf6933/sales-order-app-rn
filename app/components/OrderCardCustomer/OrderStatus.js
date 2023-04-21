import { Chip, withTheme, lightColors } from "@rneui/themed";

const order_status = ["NEW_ORDER", "IN_PROCESS", "SHIPPED", "DONE"];

function OrderStatus({ status }) {
  const getOrderStatus = () => {
    switch (status) {
      case "NEW_ORDER":
        return {
          label: "New Order",
          iconBgColor: "#f2f249",
          labelColor: "#454647",
        };

      case "IN_PROCESS":
        return {
          label: "In Process",
          iconBgColor: "#69adf0",
          labelColor: "#e3e6e8",
        };

      case "SHIPPED":
        return {
          label: "Shipped",
          iconBgColor: "#69adf0",
          labelColor: "#e3e6e8",
        };

      case "COMPLETE":
        return {
          label: "Complete",
          iconBgColor: "#69f57d",
          labelColor: "#454647",
        };

      default:
        return {
          label: "New Order",
          iconBgColor: "#f2f249",
          labelColor: "#454647",
        };
    }
  };

  return (
    <Chip
      title={getOrderStatus().label}
      color={getOrderStatus().iconBgColor}
      titleStyle={{
        color: getOrderStatus().labelColor,
        fontWeight: "600",
      }}
      icon={{
        name: "circle",
        type: "font-awesome",
        size: 15,
        color: "white",
      }}
      iconRight
    />
  );
}

export default OrderStatus;

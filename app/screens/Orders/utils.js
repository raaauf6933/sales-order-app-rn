export const getActionButtonLabel = (status) => {
  switch (status) {
    case "NEW_ORDER":
      return "In-Process";

    case "IN_PROCESS":
      return "Shipped";

    case "SHIPPED":
      return "Complete";

    case "COMPLETE":
      return "";

    default:
      return "";
  }
};

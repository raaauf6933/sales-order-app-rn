const PhpFormatter = (number) => {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(number);
};

export default PhpFormatter;

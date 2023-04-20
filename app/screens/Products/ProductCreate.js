import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Wrapper from "../../components/Wrapper";
import * as Yup from "yup";
import colors from "../../config/colors";
import {
  Form,
  FormField,
  SubmitButton,
  FormImagePicker,
} from "../../components/Form";

const validationSchema = Yup.object().shape({
  product_name: Yup.string().required().label("Product Name"),
  product_description: Yup.string()
    .required()
    .min(4)
    .label("Product Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
  product_selling_price: Yup.number().required().label("Selling Price"),
});

function ProductCreate() {
  const handleSave = async (data) => {
    console.log(data);
  };

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Wrapper>
        <View style={styles.formContainer}>
          <Form
            initialValues={{
              images: [],
              product_name: "",
              product_description: "",
              product_selling_price: 0,
            }}
            onSubmit={handleSave}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="product_name"
              placeholder="Product Name"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="product_description"
              placeholder="Description"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="product_selling_price"
              placeholder="Selling Price"
              style={{
                height: 50,
              }}
              containerStyle={{
                borderRadius: null,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}>
              Product Image
            </Text>
            <FormImagePicker name="images" />
            <SubmitButton
              title="Save"
              style={{
                height: 50,
              }}
              color="secondary"
            />
          </Form>
        </View>
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 10,
  },
});

export default ProductCreate;

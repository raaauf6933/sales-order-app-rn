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
import usePost from "../../hooks/usePost";
import routes from "./../../navigation/routes";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  product_name: Yup.string().required().label("Product Name"),
  product_description: Yup.string()
    .required()
    .min(4)
    .label("Product Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
  product_selling_price: Yup.number().required().label("Selling Price"),
});

function ProductCreate({ navigation }) {
  const [loadingImage, setLoadingImage] = useState(false);
  const [createProduct, createProductOpts] = usePost({
    onComplete: (e) => {
      navigation.navigate(routes.PRODUCTS);
    },
    onError: (err) => {
      console.log(err.response);
    },
  });

  const handleSave = async (data) => {
    createProduct({
      url: "/create_product",
      data,
      method: "POST",
    });
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
              product_selling_price: null,
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
            <FormImagePicker name="images" setLoading={setLoadingImage} />
            <SubmitButton
              title="Save"
              style={{
                height: 50,
              }}
              color="secondary"
              loading={createProductOpts.loading || loadingImage}
              disabled={createProductOpts.loading || loadingImage}
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

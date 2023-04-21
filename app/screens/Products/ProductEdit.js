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
import useApi from "../../hooks/useApi";
import LoadingScreen from "../../components/LoadingScreen";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  product_name: Yup.string().required().label("Product Name"),
  product_description: Yup.string()
    .required()
    .min(4)
    .label("Product Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
  product_selling_price: Yup.number().required().label("Selling Price"),
  quantity: Yup.number().required().label("Quantity"),
});

function ProductEdit({ navigation, ...rest }) {
  const productId = rest.route.params.id;
  const [loadingImage, setLoadingImage] = useState(false);
  const { response, loading } = useApi({
    url: "/product",
    method: "POST",
    data: {
      id: productId,
    },
  });

  const intialData = response?.data?.data;

  const [editProduct, editProductOpts] = usePost({
    onComplete: (e) => {
      navigation.navigate(routes.PRODUCTS);
    },
    onError: (err) => {
      console.log(err.response);
    },
  });

  const handleSave = async (data) => {
    editProduct({
      url: "/edit_product",
      data: {
        id: productId,
        ...data,
      },
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
          {intialData && !loading ? (
            <Form
              initialValues={{
                images: [intialData?.product_img_url],
                product_name: intialData?.product_name || "",
                product_description: intialData?.description || "",
                product_selling_price:
                  intialData?.product_selling_price.toString(),
                quantity: intialData?.quantity.toString(),
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
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                name="quantity"
                placeholder="Quantity"
                style={{
                  height: 50,
                }}
                containerStyle={{
                  borderRadius: null,
                }}
              />
              <SubmitButton
                title="Save"
                style={{
                  height: 50,
                }}
                color="secondary"
                loading={editProductOpts.loading || loadingImage}
                disabled={editProductOpts.loading || loadingImage}
              />
            </Form>
          ) : (
            <LoadingScreen />
          )}
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

export default ProductEdit;

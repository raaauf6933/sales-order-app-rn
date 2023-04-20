import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@env";

axios.defaults.baseURL = API_URL;

const useApi = (axiosParams, options) => {
  // const user = useAuth();
  // const { dispatch } = useContext(AppStateContext);
  // const { tokenRefresh } = useContext(AuthContext);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setloading] = useState(false);

  const params = {
    ...axiosParams,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const fetchData = async (refetchParams) => {
    setResponse(undefined);
    // dispatch({ type: AppStateActionType.START_LOADING });
    setloading(true);
    try {
      // await tokenRefresh();

      const result = await axios.request(
        refetchParams
          ? {
              ...refetchParams,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          : params
      );

      setResponse(result);
      return result;
    } catch (err) {
      const typedError = err;
      setError(typedError);

      // if (typedError.response?.data?.code === "TOKEN_EXPIRED") {
      //   user.logout();
      // } else if (typedError.response?.data?.code === "INVALID_TOKEN") {
      //   user.logout();
      // }
      return typedError;
    } finally {
      // dispatch({ type: AppStateActionType.FINISH_LOADING });
      setloading(false);

      return response;
    }
  };

  useEffect(() => {
    if (!options?.skip) {
      fetchData();
    }
  }, [options?.skip]); // execute once only

  return { error, loading, refetch: fetchData, response };
};

export default useApi;

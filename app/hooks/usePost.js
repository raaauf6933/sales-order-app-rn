import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@env";

axios.defaults.baseURL = API_URL;

const usePost = (props) => {
  const { onComplete, onError } = props;
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setloading] = useState(false);

  const callFn = async (params) => {
    setloading(true);

    const Params = {
      ...params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const result = await axios.request(Params);

      setResponse(result);

      if (onComplete && result) {
        onComplete(result);
      }

      return result;
    } catch (error) {
      setError(error);

      if (onError && error) {
        onError(error);
      }
      return error;
    } finally {
      setloading(false);
    }
  };

  const opts = {
    error,
    loading,
    response,
  };

  return [callFn, opts];
};

export default usePost;

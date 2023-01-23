import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    isFetching: true,
    data: null,
    error: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isFetching: true,
    });

    const response = await fetch(url);
    const data = await response.json();
    setState({
      isFetching: false,
      data,
      error: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error,
  };
};

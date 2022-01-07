import axios from "axios";
import { useEffect, useState } from "react";

export function useTimeout(delay) {
  const [state, setState] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);

  return state;
}

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  }, [url]);

  return {
    data,
    loading,
    error
  };
}

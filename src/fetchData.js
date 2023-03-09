import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (val) => {
  console.log("fetching Data");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async (val) => {
    try {
      setLoading(true);
      const res = await axios.get(val);
      console.log(res)
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData(val);
  }, [val]);

  return { loading, data };
};


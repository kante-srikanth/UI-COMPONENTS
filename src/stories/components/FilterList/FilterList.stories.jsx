import React, { useEffect, useState } from "react";
import FilterList from "./FilterList";

export default {
  title: "FilterList",
};

export const FilterListComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
    )
      .then((data) => data.json())
      .then((results) => setData([...results]));
  }, []);
  console.log(data);
  return <FilterList data={data} />;
};

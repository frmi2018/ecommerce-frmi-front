import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getCategories } from "./apiCore";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [, setError] = useState(false);

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    setMyFilters(newFilters);
  };

  return (
    <Layout
      title="Shop Page"
      description="Search and find books of your choice"
      className="container-fluid">
      <div className="row">
        <h4>Filter by categories</h4>
        <div className="col-4">
          <Checkbox
            categories={categories}
            handleFilters={(filters) => handleFilters(filters, "category")}
          />
        </div>
        <div className="col-8">{JSON.stringify(myFilters)}</div>
      </div>
    </Layout>
  );
};

export default Shop;

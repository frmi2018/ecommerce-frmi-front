import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getCategories } from "./apiCore";
import Checkbox from "./Checkbox";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

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
    console.log("SHOP", filters, filterBy);
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
        <div className="col-8">right sidebar</div>
      </div>
    </Layout>
  );
};

export default Shop;

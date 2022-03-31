import { API } from "../config";

export const createCategory = async (userId, token, category) => {
  try {
    const response = await fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    return await response.json();
  } catch (response_1) {
    return response_1.json();
  }
};

export const createProduct = async (userId, token, product) => {
  try {
    const response = await fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    });
    return await response.json();
  } catch (response_1) {
    return response_1.json();
  }
};

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

import { API } from "../config";

export const signup = async (user) => {
  // console.log(user);
  // console.log(API);
  try {
    const response = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (response_1) {
    return response_1.json();
  }
};

export const signin = async (user) => {
  // https://developer.mozilla.org/fr/docs/Web/API/Fetch_API
  try {
    const response = await fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (response_1) {
    return response_1.json();
  }
};

// https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("ecommerce-frmi-jwt", JSON.stringify(data));
    next();
  }
};

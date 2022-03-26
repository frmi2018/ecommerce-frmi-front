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

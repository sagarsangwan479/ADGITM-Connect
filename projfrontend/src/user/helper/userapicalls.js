import { API } from "../../backend";

export const updateUser = (user) => {
    return fetch(`${API}/user/${user.userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":`Bearer ${user.token}`
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const purchaseList = (user) => {
    return fetch(`${API}/orders/user/${user._id}`, {
        method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
  }

export const getUser = (userId,token) => {
    return fetch(`${API}/user/${userId}`, {
      method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api/",
  // baseURL: "https://tourism-app-backend-node.herokuapp.com/api",
});

export const fetchUsers = () =>
  API.get("/users");

// const token = localStorage.getItem("TourismSecurityTokenAdmin");

// const config = {
//   headers: { Authorization: `${token}`, "content-type": "multipart/form-data" },
// };

// export const fetchPackages = (perPage = 20) =>
//   API.get("/packages?perPage=" + perPage);
// export const fetchPackage = (id) => API.get("/packages/" + id);
// export const deletePackage = (id) => API.delete("/packages/" + id, config);
// export const createPackage = (formdata) =>
//   API.post("/packages", formdata, config);
// export const updatePackage = (id, formdata) =>
//   API.patch(/packages/ + id, formdata, config);
// export const signIn = (email, password) =>
//   API.post("/users/login", { email, password });


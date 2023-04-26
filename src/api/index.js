import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api/",
  // baseURL: "https://tourism-app-backend-node.herokuapp.com/api",
});

const token = localStorage.getItem("FundSpiritSecurityTokenAdmin");

const config = {
  headers: { Authorization: `${token}`, "content-type": "application/json" },
};

// export const fetchPackages = (perPage = 20) =>
//   API.get("/packages?perPage=" + perPage);
// export const fetchPackage = (id) => API.get("/packages/" + id);
// export const deletePackage = (id) => API.delete("/packages/" + id, config);
// export const createPackage = (formdata) =>
//   API.post("/packages", formdata, config);
// export const updatePackage = (id, formdata) =>
//   API.patch(/packages/ + id, formdata, config);

export const fetchUsers = () => API.get("/users", config);
export const signIn = (email, password) =>
  API.post("/users/login", { email, password });

// For Campaigns
export const fetchCampaigns = () => API.get("/campaigns");

export const createCampaign = (formdata) => {
  console.log(formdata, config);
  return API.post("/campaigns/create", formdata, config);
};

//for Organizations
export const fetchNPOs = () => API.get("/npos");
export const fetchNPORequests = () => API.get("/npos/requests", config);
export const fetchNPO = (id) => API.get("/npos/" + id, config);
export const approveNPO = (id) => API.put("/npos/approve/" + id, config);

import axios from "axios";

import config from "../Config";
import { getLocalAuth, objectToQueryString } from "../Utils";

const defaults = {
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getLocalAuth("auth")
      ? `Bearer ${getLocalAuth("auth").token}`
      : undefined,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message: "Something went wrong. Please check your internet connection.",
    status: 503,
    data: {},
  },
};

const makeRequest = async (method, url, data) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${config.url}/api${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? data : undefined,
      data: method !== "get" ? data : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.localStorage.clear();
            window.location.replace("/auth/login");
          }
          reject(defaults.error);
        } else {
          reject(defaults.error);
        }
      }
    );
  });

export default {
  get: (...args) => makeRequest("get", ...args),
  post: (...args) => makeRequest("post", ...args),
  put: (...args) => makeRequest("put", ...args),
  patch: (...args) => makeRequest("patch", ...args),
  delete: (...args) => makeRequest("delete", ...args),
};

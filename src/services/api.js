import axios from "axios";
/**
 * Axios defaults
 */
const { VITE_BACKEND_URL } = import.meta.env;
axios.defaults.baseURL = "http://127.0.0.1:5000/api";

// Headers
axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.defaults.headers.common.Accept = "application/json";

/**
 * Request Interceptor
 */
axios.interceptors.request.use(
  async (inputConfig) => {
    const config = inputConfig;

    // Check for and add the stored Auth Token to the header request
    let token = "";
    try {
      token = await localStorage.getItem("@Auth:token");
    } catch (error) {
      /* Nothing */
    }
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    throw error;
  }
);

export default axios;

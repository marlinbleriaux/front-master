import api from "./api";

const register = (username, password) => {
  return api.post("/register", {
    username,
    // email,
    password,
  });
};

const login = async (username, password) => {
  return api
    .post("/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.statusText == "OK") {
        localStorage.setItem("@Auth:token", response.data.access_token);
        console.log(response);
        localStorage.setItem("User", JSON.stringify(response.data.user));
      }
      return response.data;
    });
};

const logout = async () => {
  await localStorage.removeItem("@Auth:token");
  await localStorage.removeItem("User");
};
const authService = {
  register,
  // document,
  login,
  logout,
};
export default authService;

import api from "./api";

const getUsers = async ({ params = {} } = {}) => {
  return api
    .get("public/user", {
      params: {
        orderBy: "updatedAt",
        orderDirection: "desc",
        perPage: 500,
        ...params,
      },
    })
    .then((response) => {
      return response.data;
    });
};

const getRoles = async ({ params = {} } = {}) => {
  return api
    .get("admin/role/list", {
      params: {
        orderBy: "updatedAt",
        orderDirection: "desc",
        perPage: 500,
        ...params,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getTeachers = async (type) => {
  console.log(type);
  return api
    .get("public/user", { params: { type: "regex:" + type, perPage: 500 } })
    .then((response) => {
      return response.data;
    });
};
const getUserById = async (id) => {
  return api.get("public/user/" + id, {
    params: {
      populate: true,
    },
  }).then((response) => {
    return response.data;
  }); 
};

const deleteUser = ({ id, data }) => {
  return api.delete("public/user/" + id, data).then((response) => {
    return response.data;
  });
};

const addUsers = (data) => {
  return api.post("public/user/sign-up", data).then((response) => {
    return response.data;
  });
};

const updateUser = ({ id, data }) => {
  return api.patch("public/user/" + id, data).then((response) => {
    return response.data;
  });
};
const usersService = {
  getUsers,
  getRoles,
  getTeachers,
  getUserById,
  deleteUser,
  addUsers,
  updateUser,
};
export default usersService;

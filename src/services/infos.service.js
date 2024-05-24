import api from "./api";

const getInfos = async ({ params = {} } = {}) => {
  return api
    .get("info", {
      params: {
        orderBy: "createdAt",
        orderDirection: "desc",
        populate: true,
        ...params,
      },
    })
    .then((response) => {
      return response.data;
    });
};

const getInfoById = async (id) => {
  return api
    .get("info/" + id, {
      params: {
        populate: true,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const addInfo = (data) => {
  return api.post("info", data).then((response) => {
    return response.data;
  });
};

const updateInfo = ({ id, data }) => {
  return api.patch("info/" + id, data).then((response) => {
    return response.data;
  });
};
const deleteInfo = ({ id, data }) => {
  return api.delete("info/" + id, data).then((response) => {
    return response.data;
  });
};

const importInfos = (data) => {
  return api.post("info/import", data).then((response) => {
    return response.data;
  });
};

const infosService = {
  addInfo,
  getInfos,
  importInfos,
  getInfoById,
  updateInfo,
  deleteInfo,
};
export default infosService;

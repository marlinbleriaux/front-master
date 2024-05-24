import api from "./api";

const getPapers = async ({ params = {} } = {}) => {
  return api
    .get("paper", {
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
const getCountPapers = async ({ params = {} } = {}) => {
  return api
    .get("paper", {
      params: {
        orderBy: "createdAt",
        orderDirection: "desc",
        ...params,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getPaperById = async (id) => {
  return api
    .get("paper/" + id, {
      params: {
        populate: true,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const addPaper = (data) => {
  return api.post("paper", data).then((response) => {
    return response.data;
  });
};

const updatePaper = ({ id, data }) => {
  return api.patch("paper/" + id, data).then((response) => {
    return response.data;
  });
};
const deletePaper = ({ id, data }) => {
  return api.delete("paper/" + id, data).then((response) => {
    return response.data;
  });
};

const importPapers = (data) => {
  return api.post("paper/import", data).then((response) => {
    return response.data;
  });
};
const PapersService = {
  getPapers,
  getCountPapers,
  getPaperById,
  addPaper,
  updatePaper,
  deletePaper,
  importPapers,
};
export default PapersService;

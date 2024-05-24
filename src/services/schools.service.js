import api from "./api";

const getSchools = async ({ params = {} } = {}) => {
  return api
    .get("school", {
      params: {
        orderBy: "createdAt",
        orderDirection: "desc",
        populate: true,
        perPage: 500,
        page: 1,
        ...params,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getCountSchools = async ({ params = {} } = {}) => {
  return api
    .get("school", {
      params: {
        // orderBy: "createdAt",
        // orderDirection: "desc",
        ...params,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getSchoolById = async (id) => {
  return api
    .get("school/" + id, {
      params: {
        populate: true,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const addSchool = (data) => {
  return api.post("school", data).then((response) => {
    return response.data;
  });
};

const updateSchool = ({ id, data }) => {
  return api.patch("school/" + id, data).then((response) => {
    return response.data;
  });
};
const deleteSchool = ({ id, data }) => {
  return api.delete("school/" + id, data).then((response) => {
    return response.data;
  });
};

const importSchools = (data) => {
  return api.post("school/import", data).then((response) => {
    return response.data;
  });
};
const SchoolsService = {
  getSchools,
  getCountSchools,
  getSchoolById,
  addSchool,
  updateSchool,
  deleteSchool,
  importSchools,
};
export default SchoolsService;

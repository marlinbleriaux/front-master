import api from "./api";

const getStudents = async ({ params = {} } = {}) => {
  return api
    .get("/students", {
    //   params: {
    //     orderBy: "updatedAt",
    //     orderDirection: "desc",
    //     perPage: 500,
    //     ...params,
    //   },
    })
    .then((response) => {
      return response.data;
    });
};
const createStudent = (data) => {
  console.log(data);
    return api.post("/students", data).then((response) => {
      return response.data;
    });
  };

const enrollStudent = async (id, photoFile) => {
    try {
      const formData = new FormData();
      formData.append('photo', photoFile);
  
      const response = await api.post(`/enroll/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const checkAttendance = async (data) => {
    try {
      console.log("check")
      console.log(data)
      // const formData = new FormData();
      // formData.append('photo', photoFile, 'photo.jpg');  
      const response = await api.post('/check', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  

const studentService = {
    getStudents,
    checkAttendance,
    enrollStudent,
    createStudent
//   getUserById,
//   deleteUser,
//   addUsers,
//   updateUser,
};
export default studentService;

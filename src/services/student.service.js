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
      // const formData = new FormData();
      // formData.append('photo', photoFile);
  console.log(id)
      const response = await api.post(`/enroll/${id}`, photoFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      throw error
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
  const getStudentById = async (id) => {
    try {
      console.log(id);
        const response = await api.get(`/students/${id}`);
        // console.log(response);
        return response.data;
        
    } catch (error) {
        console.error("Error fetching student:", error);
        throw error;
    }
};


const studentService = {
    getStudents,
    checkAttendance,
    enrollStudent,
    createStudent,
    getStudentById,
//   deleteUser,
//   addUsers,
//   updateUser,
};
export default studentService;

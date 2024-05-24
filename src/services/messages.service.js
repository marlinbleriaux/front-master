import api from "./api";

const getChat = ({ id, params = {} } = {}) => {
  return api
    .get("chat", {
      params: {
        populate: true,
        orderBy: "updatedAt",
        orderDirection: "desc",
        ...params
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getMessages = ({ page = 1, id }) => {
  return api
    .get("chat/" + id, {
      params: {
        page,
        populate: true,
        orderBy: "updatedAt",
        orderDirection: "desc",
      },
    })
    .then((response) => {
      return response.data;
    });
};
const sendMessage = (data) => {
  return api.patch("chat/" + data?.id, data?.data).then((response) => {
    return response;
  });
};

const messageService = {
  getChat,
  getMessages,
  sendMessage,
};
export default messageService;

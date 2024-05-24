import format_date from "./formatDate";
import default_person_picture from "../images/amphimill/default_person_picture.png";
// import translate from "../language/language";

const getTitle = (chat_user, user) => {
  // console.log(user);

  const response = {};
  chat_user?.forEach((e, i) => {
    // console.log(e?.picture);
    if (e?._id != user?._id) {
      response.title = e?.lastName;
      response.image = e?.picture?.completedUrl
        ? e.picture?.completedUrl
        : default_person_picture;
    }
  });
  return response;
};

export const getValues = (item, currentUser = {}, app = "") => {
  return {
    title: getTitle(item?.users, currentUser).title,
    image: getTitle(item?.users, currentUser).image,
  };
};

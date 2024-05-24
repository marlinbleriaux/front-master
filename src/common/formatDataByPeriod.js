import formatDate from "../utils/formatDate";

const formatDataByPeriod = (period) => {
  const currentDate = new Date();
  switch (period) {
    case "Today":
      const today = new Date();
      today.setDate(currentDate.getDate() - 1);
      return {
        start: formatDate(currentDate, "YYYY-MM-DD"),
        end: formatDate(currentDate, "YYYY-MM-DD"),
      };
    case "Last 7 Days":
      const last7Days = new Date();
      last7Days.setDate(currentDate.getDate() - 7);
      return {
        start: formatDate(last7Days, "YYYY-MM-DD"),
        end: formatDate(currentDate, "YYYY-MM-DD"),
      };
    case "Last Month":
      const lastMont = new Date();
      lastMont.setDate(currentDate.getDate() - 30);
      return {
        start: formatDate(lastMont, "YYYY-MM-DD"),
        end: formatDate(currentDate, "YYYY-MM-DD"),
      };
    case "Last 3 Days":
      const last3Days = new Date();
      last3Days.setDate(currentDate.getDate() - 3);
      return {
        start: formatDate(last3Days, "YYYY-MM-DD"),
        end: formatDate(currentDate, "YYYY-MM-DD"),
      };
    default:
      return {
        start: "",
        end: "",
      };
  }
};

export default formatDataByPeriod;

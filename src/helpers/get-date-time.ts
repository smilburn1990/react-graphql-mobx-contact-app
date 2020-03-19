import moment from "moment";

export const getDateTime = () => {
  return moment(new Date()).format("DD-MM-YYYY HH:mm");
};

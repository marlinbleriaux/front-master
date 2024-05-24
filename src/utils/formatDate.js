import moment from 'moment';
// import 'moment/locale/en';

const dateLang = ({ date, format, lang }) => {
  // if (lang === 'fr') {
  //   require('moment/locale/fr');
  // }
  return moment(date).format(format);
};
const formatDate = (date, format = 'DD MMM YYYY', lang = 'fr') => dateLang({ date, format, lang });

export default formatDate;

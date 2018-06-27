import moment from 'moment';

export default (optionKey = 'date', results) => {
  switch (optionKey) {
    case 'weekday':
      return results.map((result) => {
        return { ...result, groupId: String(moment().day(result.groupId)._d).substr(0, 3) };
      });
    case 'month':
      return results.map((result) => {
        return { ...result, groupId: String(moment().months(result.groupId - 1)._d).substr(4, 3) };
      });
    default:
      return results;
  }
};

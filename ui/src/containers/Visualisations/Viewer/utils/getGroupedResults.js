// @ts-check

/**
 * @typedef {Object} GroupResult
 * @property {string} _id
 * @property {string} model
 * @property {number} count
 */

/**
 * @param {GroupResult[]} groupResults
 * @returns {{[groupId: string]: { groupId: string, name: string, count: number }}}
 */

const findName = (name, optionKey) => {
  if (optionKey == "people") {
    switch (true) {
      case name.hasOwnProperty('account'): 
        return name.account.name;
      case name.hasOwnProperty('openid'):
        return name.openid;
      case name.hasOwnProperty('mbox'):
        return name.mbox; 
      case name.hasOwnProperty('mbox_sha1sum'):
        return name.mbox_sha1sum;  
      default: return name; 
    }
  } else {
    return name
  }
}
const getGroupedResults = (groupResults, optionKey) => {
  return groupResults.reduce((groupedSeriesResult, groupResult) => {
    const { _id: groupId, count } = groupResult;
    const name = findName(groupResult.model, optionKey)
    groupedSeriesResult[groupResult._id] = { groupId, name, count };
    console.log('gsr',groupedSeriesResult)
    return groupedSeriesResult;
  }, {});
};

export default getGroupedResults;

// @ts-check
import getGroupedResults from './getGroupedResults';
import getTupleGroupedSeriesResults from './getTupleGroupedSeriesResults';

/**
 * @typedef {Object} GroupResult
 * @property {string} _id
 * @property {string} model
 * @property {number} count
 */

/**
 * @param {GroupResult[][][]} seriesResults
 * @returns {{[groupId: string]: { groupId: string, name: string, count: number }}[]}
 */
const getValueGroupedSeriesResults = (seriesResults, optionKey) => {
  return seriesResults.map((seriesResult) => {
    return getGroupedResults(seriesResult[0], optionKey);
  });
};

export default getValueGroupedSeriesResults;

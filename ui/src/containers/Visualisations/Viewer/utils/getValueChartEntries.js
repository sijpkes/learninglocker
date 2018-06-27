// @ts-check
import getSeriesDataKey from './getSeriesDataKey';
import moment from 'moment';
/**
 * @param {{ [groupId: string]: string }} groupDictionary
 * @param {{[groupId: string]: { groupId: string, name: string, count: number }}[]} groupedSeriesResults
 * @returns [{ groupId, total, s0, s1, ... }]
 */
const getValueChartEntries = (groupDictionary, groupedSeriesResults, formatForPie = false) => {
  return Object.keys(groupDictionary).map((groupId) => {
    return groupedSeriesResults.reduce((chartDataEntry, groupedSeriesResult, index) => {
      const groupResult = groupedSeriesResult[groupId];
      const value = groupResult !== undefined ? groupResult.count : 0
      chartDataEntry[getSeriesDataKey(index)] = value;
      if (formatForPie) {
        chartDataEntry.name = groupResult.name;
        typeof chartDataEntry.value == "number" ? chartDataEntry.value += value : chartDataEntry.value = value;
        delete chartDataEntry.groupId
        delete chartDataEntry.total
        delete chartDataEntry.s0
      } else {
      chartDataEntry.total += value;
      }

      return chartDataEntry;
    }, { groupId, total: 0 });
  });
};

export default getValueChartEntries;

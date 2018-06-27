// @ts-check
import getValueChartEntries from './getValueChartEntries';

const before = -1;
const after = 1;
const same = 0;

/**
 * @param {{ [groupId: string]: string }} groupDictionary
 * @param {{[groupId: string]: { groupId: string, name: string, count: number }}[]} groupedSeriesResults
 * @returns [{ groupId, total, s0, s1, ... }]
 */
const getSortedValueChartEntries = (groupDictionary, groupedSeriesResults, formatForPie = false) => {
  return getValueChartEntries(groupDictionary, groupedSeriesResults, formatForPie).sort((entryA, entryB) => {
    if (entryA.total > entryB.total) { return before; }
    if (entryA.total < entryB.total) { return after; }
    return same;
  });
};

export default getSortedValueChartEntries;

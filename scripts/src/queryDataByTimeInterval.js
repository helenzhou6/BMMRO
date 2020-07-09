const Status = require("./helpers/Status");
const messages = require("./constants/messages");

const queryDataByTimeInterval = async (
  startDate,
  endDate,
  timestampFieldName,
  firestoreInstance,
  collection
) => {
  const rawResults = await firestoreInstance
    .collection(collection)
    .where(timestampFieldName, ">=", startDate)
    .where(timestampFieldName, "<", endDate)
    .get();

  const results = [];
  rawResults.forEach((doc) => results.push(doc.data()));

  if (results.length === 0) {
    return new Status("NO_DATA", messages.NO_DATA);
  }

  return new Status("SUCCESS", results);
};

module.exports = queryDataByTimeInterval;

const convertDateToMDY = require("../convertDateToMDY");

module.exports = {
  habitatUse: {
    Area: { key: "" },
    Date: { key: "date", transform: convertDateToMDY },
    "Sequence #": { key: "encSeqNo" },
    Time: { key: "startTime" },
    Latitude: { key: "latitude" },
    Longitude: { key: "longitude" },
    "Water temperature": { key: "waterTemp" },
    "Water depth": { key: "waterDepth" },
    "Bottom substrate": { key: "bottomSubstrate" },
    "Cloud cover": { key: "cloudCover" },
    "Beaufort scale": { key: "beaufortSeaState" },
    "Tide state": { key: "tideState" },
    Behaviour: { key: "behaviour" },
    "Number of boats": { key: "numberOfBoats" },
    "Wave Height": { key: "swellWaveHeight" },
    DOT: { key: "" },
    "Surfacing Bout": { key: "surfaceBout" },
    "Tagged Whale?": { key: "" },
    "Bearing (relative )": { key: "bearing" },
    Distance: { key: "distance" },
    "Aspect (relative)": { key: "aspect" },
    "Non-Tagged Surfacing Counts": { key: "" },
    "Tagged Surfacing Counts": { key: "" },
    "Group Cohesion": { key: "groupCohesion" },
    "End Time": { key: "endTime" },
    "Group Composition": { key: "groupComposition" },
    "# animals": { key: "numberOfAnimals" },
    Comment: { key: "comments" },
  },
};

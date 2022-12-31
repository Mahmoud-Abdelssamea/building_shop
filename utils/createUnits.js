const createUnits = (noFloors, buildingNum) => {
  let units = [];
  const unitName = ["a", "b", "c", "d"];

  for (let i = 0; i < noFloors; i++) {
    for (let j = 0; j < 4; j++) {
      let unit = {
        unitName: unitName[j],
        floorNo: i + 1,
        unitAddress: `${buildingNum}-${i + 1}-${unitName[j]}`,
      };
      units.push(unit);
    }
  }
  return units;
};

module.exports = createUnits;

// Code your solution in this file

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch(list, name) {
  return list.filter(function (driver) {
    return driver.toLowerCase().substring(0, name.length) === name.toLowerCase();
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
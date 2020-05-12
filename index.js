// Code your solution in this file
function findMatching(drivers, name) {
	d = drivers.filter(function (u) {return u.toLowerCase() === name.toLowerCase();})
	return d
}

function fuzzyMatch(drivers, str) {
	d = drivers.filter(function (u) {return u.slice(0,str.length) === str})
	return d
}

function matchName(drivers, str) {
	d = drivers.filter(function (u) {return u.name === str})
	return d
}
const t = require('./time')

function current() {
  return t.nows;
};

function dayOfYear() {
  return t.dayYear;
}

function seconds () {
  return (t.hours * 60 * 60) + (t.minutes * 60) + Number(t.seconds);
}

function isDaylight () {
  if(t.dayLight) {
    return "is"
  } else {
    return "isn't";
  }
}

function isLeapYear() {
  if(t.leapYear) {
    return "is"
  } else {
    return "isn't"
  }
}

module.exports = {
  current: current,
  dayOfYear: dayOfYear,
  seconds: seconds,
  isDaylight: isDaylight,
  isLeapYear: isLeapYear
}

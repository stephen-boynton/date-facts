var moment = require('moment');

module.exports = {
  nows: moment().format('dddd, MMMM DD, YYYY, hh:mm:ss a'),
  dayLight: moment().isDST(),
  leapYear: moment().isLeapYear(),
  month: moment().format('MMMM'),
  monthNo: moment().format('MM'),
  dayOfWeek: moment().format('dddd'),
  dayOfMonth: moment().format('DD'),
  hours: moment().format('HH'),
  minutes: moment().format('mm'),
  seconds: moment().format('ss'),
  amPM: moment().format('a'),
  dayYear: moment().format('DDDo')
}

const chalk = require('chalk');
const calc = require('./calculate')

function logIt () {
  console.log(`It is ${chalk.blue(calc.current())}.`);
  console.log(`It is ${chalk.keyword('purple')(calc.dayOfYear())} day of the year`);
  console.log(`It is ${chalk.cyan(calc.seconds())} seonds into the day`);
  console.log(`It ${chalk.green(calc.isDaylight())} DayLight Savings Time`);
  console.log(`It ${chalk.red(calc.isLeapYear())} a leap year.`);
};

module.exports = logIt;

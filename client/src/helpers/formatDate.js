import moment from "moment";
import { FORMAT_DATE, FORMAT_MONTH } from "../constants/date";

const configDate = (date) => (date ? moment(date, FORMAT_DATE) : "");

const formatDate = (date) => (date ? date.format(FORMAT_DATE) : "");

const configMonth = (date) => (date ? moment(date, FORMAT_MONTH) : "");

const formatMonth = (date) => (date ? date.format(FORMAT_MONTH) : "");

const workDayCalculation = (date) => {
  // EDIT : use of startOf
  const startDay = moment(date, FORMAT_MONTH).startOf("month");
  const endDay = moment(date, FORMAT_MONTH).endOf("month");
  let day1 = moment(startDay).startOf("day");
  let day2 = moment(endDay).startOf("day");
  // EDIT : start at 1
  let adjust = 1;

  if (day1.dayOfYear() === day2.dayOfYear() && day1.year() === day2.year()) {
    return 0;
  }

  if (day2.isBefore(day1)) {
    const temp = day1;
    day1 = day2;
    day2 = temp;
  }

  //Check if first date starts on weekends
  if (day1.day() === 6) {
    //Saturday
    //Move date to next week monday
    day1.day(8);
  } else if (day1.day() === 0) {
    //Sunday
    //Move date to current week monday
    day1.day(1);
  }

  //Check if second date starts on weekends
  if (day2.day() === 6) {
    //Saturday
    //Move date to current week friday
    day2.day(5);
  } else if (day2.day() === 0) {
    //Sunday
    //Move date to previous week friday
    day2.day(-2);
  }

  const day1Week = day1.week();
  let day2Week = day2.week();

  //Check if two dates are in different week of the year
  if (day1Week !== day2Week) {
    //Check if second date's year is different from first date's year
    if (day2Week < day1Week) {
      day2Week += day1Week;
    }
    //Calculate adjust value to be substracted from difference between two dates
    // EDIT: add rather than assign (+= rather than =)
    adjust += -2 * (day2Week - day1Week);
  }

  return day2.diff(day1, "days") + adjust;
};

export { configDate, formatDate, workDayCalculation, configMonth, formatMonth };

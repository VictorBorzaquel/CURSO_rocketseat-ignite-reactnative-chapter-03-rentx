import { addHours, format, subHours } from "date-fns";

export function getDateUTM(date: Date) {
  const timeZone = date.getTimezoneOffset() / 60;

  const dateUTM =
    timeZone <= 0 ? subHours(date, timeZone) : addHours(date, timeZone);

  const dateCorrect = format(dateUTM, "yyyy-MM-dd");

  return dateCorrect;
}

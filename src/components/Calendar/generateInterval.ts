import {
  addDays,
  addHours,
  eachDayOfInterval,
  format,
  subHours,
} from "date-fns";

import { MarkedDateProps, DateProps } from ".";
import theme from "../../styles/theme";
import { getDateUTM } from "../../utils/getDateUTM";

export function generateInterval(startDate: DateProps, endDate: DateProps) {
  let interval: MarkedDateProps = {};

  const start = new Date(startDate.timestamp);
  const end = new Date(endDate.timestamp);

  const { main, main_light } = theme.colors;

  eachDayOfInterval({ start, end }).forEach((item) => {
    const date = getDateUTM(addDays(item, 1));
    const startFormatted = getDateUTM(start);
    const endFormatted = getDateUTM(end);

    const isStartOrEnd = startFormatted === date || endFormatted === date;

    interval = {
      ...interval,
      [date]: {
        color: isStartOrEnd ? main : main_light,
        textColor: !isStartOrEnd ? main : main_light,
      },
    };
  });
  return interval;
}

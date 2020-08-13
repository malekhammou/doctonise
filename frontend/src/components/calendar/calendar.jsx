import React from "react";
import "./calendar.css";
import {
  Scheduler,
  AgendaView,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";

const Calendar = () => {
  const data = [];
  return (
    <Scheduler>
      <AgendaView />
      <TimelineView />
      <DayView />
      <WeekView />
      <MonthView />
    </Scheduler>
  );
};

export default Calendar;

import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
const Datepicker = ({ onChange, value }) => {
  const [selectedDay, setSelectedDay] = useState(value);
  const myCustomLocale = {
    months: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],

    // week days by order
    weekDays: [
      {
        name: "Dimanche", // used for accessibility
        short: "D", // displayed at the top of days' rows
        isWeekend: true, // is it a formal weekend or not?
      },
      {
        name: "Lundi",
        short: "L",
      },
      {
        name: "Mardi",
        short: "M",
      },
      {
        name: "Mercredi",
        short: "M",
      },
      {
        name: "Jeudi",
        short: "J",
      },
      {
        name: "Vendredi",
        short: "V",
      },
      {
        name: "Samedi",
        short: "S",
        isWeekend: true,
      },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit;
    },

    // texts in the date picker

    defaultPlaceholder: "Sélectionner une date...",

    // for input range value
    from: "de",
    to: "à",

    // used for input value when multi dates are selected
    digitSeparator: ",",

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
  };
  const formatInputValue = () => {
    if (!selectedDay) return "";
    return `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`;
  };
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Date de naissance"
      value={
        selectedDay
          ? `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`
          : "Date de naissance"
      }
      style={{
        display: "block",
        position: "relative",
        right: "0.2rem",
        textAlign: "left",
        width: "100%",
        padding: "0",
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "black",
        backgroundColor: "#fff",
        border: "none",
        borderRadius: "100px",
        outline: "none",
      }}
    />
  );
  return (
    <DatePicker
      value={selectedDay}
      onChange={(e) => {
        setSelectedDay(e);
        onChange(e);
      }}
      inputPlaceholder="Date de naissance"
      locale={myCustomLocale}
      formatInputText={formatInputValue}
      shouldHighlightWeekends
      renderInput={renderCustomInput}
    />
  );
};

export default Datepicker;

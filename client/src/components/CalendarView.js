import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

function CalendarView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from Google Calendar API via backend
    axios.get(`${process.env.REACT_APP_API_URL}/schedule`).then((response) => {
      setEvents(
        response.data.map((event) => ({
          title: event.summary,
          start: new Date(event.start.dateTime),
          end: new Date(event.end.dateTime),
        }))
      );
    });
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
}

export default CalendarView;

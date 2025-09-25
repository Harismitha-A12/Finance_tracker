import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h2>Transactions Calendar</h2>
      <Calendar onChange={setDate} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}

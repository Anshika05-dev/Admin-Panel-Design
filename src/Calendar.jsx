import './styles/Calendar.css'
import React, { useState, useEffect  } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Interview',
      start: '2025-04-07T11:31:00',
      color: '#00c851',
    },
    {
      title: 'Meeting with Mr. Shreyu',
      start: '2025-04-09T07:25:00',
      end: '2025-04-11T17:00:00',
      color: '#ffbb33',
    },
    {
      title: 'Phone Screening',
      start: '2025-04-09T10:11:00',
      color: '#33b5e5',
    },
    {
      title: 'Buy Design Assets',
      start: '2025-04-11T09:25:00',
      color: '#5e72e4',
    },
  ]);

  const handleDateClick = (info) => {
    const title = prompt('Enter event title');
    console.log( info.dateStr)
    console.log(title)
    if (title) {
      setEvents([...events, { title, start: info.dateStr }]);
    }
  };

  return (
    <div>
      <button className='new-event'
        onClick={() => {
          const title = prompt('Enter new event title:');
          if (title) {
            setEvents([...events, { title, start: new Date().toISOString() }]);
          }
        }}
      >
        + Create New Event
      </button>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
      />
    </div>
  );
};

export default Calendar;

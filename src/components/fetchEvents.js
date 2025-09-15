const timeOffsets = {
  social: 31,
  fundraiser: 31,
  workshop: 21,
  competition: 90,
};

const CALENDAR_ID = "1e79b55343290be5c7bf935f61f48f8906b1e91d26116edc26b9ebbfe16d6cf8@group.calendar.google.com";
const API_KEY = "AIzaSyA40eo7r7qepeP-wHgbFz4c4TUq_dNkydk";

function getEventType(description = "") {
  if (description.includes("#tag: workshop")) return "workshop";
  if (description.includes("#tag: competition")) return "competition";
  if (description.includes("#tag: social")) return "social";
  if (description.includes("#tag: fundraiser")) return "fundraiser";
  return "workshop"; // default to workshop if no tag found
}

const fetchEvents = async (past = false) => {
  const now = new Date();
  const rangeStart = new Date(now);
  const rangeEnd = new Date(now);

  // Use the largest offset to fetch all possible events, then filter
  const maxOffset = Math.max(...Object.values(timeOffsets));
  if (past) {
    rangeStart.setDate(now.getDate() - maxOffset * 2);
    rangeEnd.setDate(now.getDate());
  } else {
    rangeStart.setDate(now.getDate());
    rangeEnd.setDate(now.getDate() + maxOffset);
  }

  const timeMin = rangeStart.toISOString();
  const timeMax = rangeEnd.toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let events = data.items || [];

    // Filter events by tag and time window
    events = events.filter(event => {
      const type = getEventType(event.description || "");
      if (!type) return false;

      const eventDate = new Date(event.start.dateTime || event.start.date);
      let offset = timeOffsets[type];
      if (past) offset *= 2;

      if (past) {
        const minDate = new Date(now);
        minDate.setDate(now.getDate() - offset);
        return eventDate >= minDate && eventDate < now;
      } else {
        const maxDate = new Date(now);
        maxDate.setDate(now.getDate() + offset);
        return eventDate >= now && eventDate <= maxDate;
      }
    });

    // Sort events
    events.sort((a, b) => {
      const dateA = new Date(a.start.dateTime || a.start.date).getTime();
      const dateB = new Date(b.start.dateTime || b.start.date).getTime();
      return past ? dateB - dateA : dateA - dateB;
    });

    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default fetchEvents;

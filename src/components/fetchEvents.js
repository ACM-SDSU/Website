const timeOffsets = {
    "major": {
        "future": 90,
        "past": 180,
    },
    "minor": {
        "future": 21,
        "past": 28,
    },
}

const fetchEvents = async (past = false) => {
    const API_KEY = "AIzaSyA40eo7r7qepeP-wHgbFz4c4TUq_dNkydk";
    const CALENDAR_ID = "1e79b55343290be5c7bf935f61f48f8906b1e91d26116edc26b9ebbfe16d6cf8@group.calendar.google.com";
    const MAJOR_CALENDAR_ID = "e02db2fdfdf2fba777e3d5e451b87c7f7a7e5a82716006da59a5052e04b6a964@group.calendar.google.com";
  
    const now = new Date();
  
    // Base calendar: past 30 days or next 21 days
    const rangeStartBase = new Date(now);
    const rangeEndBase = new Date(now);
    if (past) {
      rangeStartBase.setDate(now.getDate() - timeOffsets.minor.past);
      rangeEndBase.setDate(now.getDate() - 1);
    } else {
      rangeStartBase.setDate(now.getDate() - 1);
      rangeEndBase.setDate(now.getDate() + timeOffsets.minor.future);
    }
  
    // Major calendar: past 120 days or next 60 days
    const rangeStartMajor = new Date(now);
    const rangeEndMajor = new Date(now);
    if (past) {
      rangeStartMajor.setDate(now.getDate() - timeOffsets.major.past);
      rangeEndMajor.setDate(now.getDate() - 1);
    } else {
      rangeStartMajor.setDate(now.getDate() - 1);
      rangeEndMajor.setDate(now.getDate() + timeOffsets.major.future);
    }
  
    const timeMin_base = rangeStartBase.toISOString();
    const timeMax_base = rangeEndBase.toISOString();
    const timeMin_major = rangeStartMajor.toISOString();
    const timeMax_major = rangeEndMajor.toISOString();
  
    const url_base = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin_base}&timeMax=${timeMax_base}&singleEvents=true&orderBy=startTime`;
    const url_major = `https://www.googleapis.com/calendar/v3/calendars/${MAJOR_CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin_major}&timeMax=${timeMax_major}&singleEvents=true&orderBy=startTime`;
  
    try {
      const response = await fetch(url_base);
      const data_basic = await response.json();
  
      const response_major = await fetch(url_major);
      const data_major = await response_major.json();
  
      const combinedEvents = [...(data_basic.items || []), ...(data_major.items || [])];
  
      combinedEvents.sort((a, b) => {
        const dateA = new Date(a.start.dateTime || a.start.date).getTime();
        const dateB = new Date(b.start.dateTime || b.start.date).getTime();
        return past ? dateB - dateA : dateA - dateB; // Descending for past
      });
  
      return combinedEvents;
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  };
  
export default fetchEvents;
  
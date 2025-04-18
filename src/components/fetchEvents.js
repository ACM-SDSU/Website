const fetchEvents = async () => {
    // const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    const API_KEY = "AIzaSyA40eo7r7qepeP-wHgbFz4c4TUq_dNkydk";
    const CALENDAR_ID = "1e79b55343290be5c7bf935f61f48f8906b1e91d26116edc26b9ebbfe16d6cf8@group.calendar.google.com";
    const MAJOR_CALENDAR_ID = "e02db2fdfdf2fba777e3d5e451b87c7f7a7e5a82716006da59a5052e04b6a964@group.calendar.google.com";
    const timeMin = new Date(new Date().setDate(new Date().getDate()-1)).toISOString(); // Current time
    const timeMax = new Date(new Date().setDate(new Date().getDate() + 21)).toISOString(); // Next 21 days
    const timeMax_major = new Date(new Date().setDate(new Date().getDate() + 60)).toISOString(); // Next 60 days
    
    const url_base = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;
    const url_major = `https://www.googleapis.com/calendar/v3/calendars/${MAJOR_CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax_major}&singleEvents=true&orderBy=startTime`;
    try {
        const response = await fetch(url_base);
        const data_basic = await response.json();
        const response_major = await fetch(url_major);
        const data_major = await response_major.json();

        const combinedEvents = [...(data_basic.items || []), ...(data_major.items || [])];
        combinedEvents.sort((a,b)=>{
            const dateA = new Date(a.start.dateTime || a.start.date).getTime();
            const dateB = new Date(b.start.dateTime || b.start.date).getTime();
            return dateA - dateB; // Sort in ascending order
        });
        return combinedEvents; // List of events
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

export default fetchEvents;
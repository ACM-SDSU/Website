const EventCard = ({ event }) => {
    const { summary, start, end, description, location } = event;
  
    // Format date and time
    const startDate = new Date(start.dateTime || start.date);
    const endDate = end?.dateTime ? new Date(end.dateTime) : null;
  
    const formatDate = date =>
      date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  
    const formatTime = date =>
      date ? date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", hour12: true }) : "All day";
  
    return (
        <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 mb-4 text-acm-dark-blue">
            <h3 className="text-xl font-semibold">{summary}</h3>
            <p className="text-acm-blue">{formatDate(startDate)}, {formatTime(startDate)} {endDate ? ` - ${formatTime(endDate)}` : ""}, {location}</p>
            {description && <p className="mt-2 text-gray-800">{description}</p>}
        </div>
    );
};
  
export default EventCard;  
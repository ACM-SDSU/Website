const extractImageUrl = (description) => {
  if (!description) return null;

  // Match Google Drive file links: drive.google.com/file/d/FILE_ID/view
  const driveMatch = description.match(/https:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/view/);

  // Match Google Drawings links: docs.google.com/drawings/d/FILE_ID/edit
  const drawingMatch = description.match(/https:\/\/docs\.google\.com\/drawings\/d\/([\w-]+)\/edit/);

  const fileId = driveMatch?.[1] || drawingMatch?.[1];
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : null;
};

const cleanDescription = (description) => {
  if (!description) return "";
  // Remove Google Drive and Drawing URLs from the visible text
  return description
    .replace(/https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/view[^\s]*/g, "")
    .replace(/https:\/\/docs\.google\.com\/drawings\/d\/[\w-]+\/edit[^\s]*/g, "")
    .trim();
};

const EventCard = ({ event }) => {
  const { summary, start, end, description, location } = event;

  const startDate = new Date(start.dateTime || start.date);
  const endDate = end?.dateTime ? new Date(end.dateTime) : null;

  const formatDate = (date) =>
    date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

  const formatTime = (date) =>
    date ? date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", hour12: true }) : "All day";

  const imageUrl = extractImageUrl(description);
  const cleanDesc = cleanDescription(description);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 mb-4 text-acm-dark-blue">
      <h3 className="text-xl font-semibold">{summary}</h3>
      <p className="text-acm-blue">
        {formatDate(startDate)}, {formatTime(startDate)}
        {endDate ? ` - ${formatTime(endDate)}` : ""}, {location}
      </p>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${summary} visual`}
          className="mt-3 w-full max-h-60 object-contain rounded-xl"
        />
      )}

      {cleanDesc && <p className="mt-2 text-gray-800">{cleanDesc}</p>}
    </div>
  );
};

export default EventCard;

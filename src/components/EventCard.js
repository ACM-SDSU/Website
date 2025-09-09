// Example import paths – update based on your project structure
import SocialIcon from "../images/logos/social.jpg";
import WorkshopIcon from "../images/logos/workshop2.jpg";
import CompetitionIcon from "../images/logos/competition.jpg";

const categoryIcons = {
  social: SocialIcon,
  workshop: WorkshopIcon,
  competition: CompetitionIcon,
};

const cleanDescription = (description) => {
  if (!description) return "";
  // Remove any line containing "#tag:"
  return description.replace(/#tag:[^\n\r]*/i, "").trim();
};

const detectCategory = (summary, description) => {
  const tagMatch = description?.match(/#tag:\s*(\w+)/i);
  const tag = tagMatch?.[1]?.toLowerCase();

  if (tag && categoryIcons[tag]) return tag;

  const lowerTitle = summary?.toLowerCase() || "";

  if (lowerTitle.includes("workshop")) return "workshop";
  if (lowerTitle.includes("social")) return "social";
  if (lowerTitle.includes("competition")) return "competition";

  return null;
};


const EventCard = ({ event }) => {
  const { summary, start, end, description, location } = event;

  // Parse tag from description (e.g., "#tag: social")
  const category = detectCategory(summary, description);
  const icon = category ? categoryIcons[category] : null;

  const startDate = new Date(start.dateTime || start.date);
  const endDate = end?.dateTime ? new Date(end.dateTime) : null;

  const formatDate = date =>
    date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

  const formatTime = date =>
    date ? date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", hour12: true }) : "All day";

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg md:rounded-2xl p-2 md:py-3 md:px-5 xl:p-4 border border-gray-200 mb-4 text-acm-dark-blue">
      {icon && (
        <div className="hide flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <img src={icon} alt={category} className="w-20 md:w-24 lg:w-24 xl:w-26 h-auto object-contain" />
        </div>
      )}
      <div>
        <h3 className="text-lg md:text-xl font-semibold">{summary}</h3>
        <p className="text-base md:text-lg text-acm-blue">
          {formatDate(startDate)}, {formatTime(startDate)} {endDate ? ` - ${formatTime(endDate)}` : ""}, {location}
        </p>
        {description && <p className="text-sm md:text-lg mt-2 text-gray-800">{cleanDescription(description)}</p>}
      </div>
    </div>
  );
};

export default EventCard;

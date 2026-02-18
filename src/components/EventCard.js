// Example import paths – update based on your project structure
import SocialIcon from "../images/logos/social.jpg";
import WorkshopIcon from "../images/logos/workshop.jpg";
import CompetitionIcon from "../images/logos/competition.jpg";
import FundraiserIcon from "../images/logos/fundraiser.jpg";

const categoryIcons = {
  social: SocialIcon,
  workshop: WorkshopIcon,
  competition: CompetitionIcon,
  fundraiser: FundraiserIcon,
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
  if (lowerTitle.includes("fundraiser")) return "fundraiser";

  return "workshop"; // default to workshop if no tag found
};


const EventCard = ({ event }) => {
  const { summary, start, end, description, location } = event;

  const category = detectCategory(summary, description);
  const icon = category ? categoryIcons[category] : null;

  const startDate = new Date(start.dateTime || start.date);
  const endDate = end?.dateTime ? new Date(end.dateTime) : null;

  const formatDate = (date) =>
    date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

  const formatTime = (date) =>
    date ? date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true }) : 'All day';

  return (
    <div className="card-surface mb-4 p-4 flex flex-row items-start gap-4 fade-up">
      {icon && (
        <div className="flex-shrink-0">
          <img src={icon} alt={category} className="w-12 h-12 rounded-md object-cover" />
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-[80%]">
            <h3 className="text-lg md:text-xl font-semibold text-white">{summary}</h3>
            <p className="text-sm text-muted-gray">{cleanDescription(description)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-acm-light-blue">{formatDate(startDate)}</p>
            <p className="text-xs text-muted-gray">{formatTime(startDate)}{endDate ? ` - ${formatTime(endDate)}` : ''}</p>
            {location && <p className="text-xs text-gray-300 mt-1">{location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

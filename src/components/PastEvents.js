import {React, useState, useEffect} from "react";
import EventCard from "./EventCard";
import fetchEvents from "./fetchEvents"; // Import your API function

const EventsList = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  const loadEvents = async () => {
		const fetchedEvents = await fetchEvents(true);
		setEvents(fetchedEvents);
		setLoading(false);
	  };
  
	  loadEvents();
	}, []);
  
	return (
	  <div className="max-w-3xl xl:max-w-4xl mx-auto p-5 text-white">
		{loading ? (
		  <p>Loading events...</p>
		) : events.length > 0 ? (
		  events.map(event => <EventCard key={event.id} event={event} />)
		) : (
		  <p class="text-center">There was an error fetching the latest information on past events. Please refresh the page.</p>
		)}
	  </div>
	);
  };

export default function Events() {
	return (
		<section id="pastevents" class="p-8 pb-2 bg-gray-900 text-white">
			<h1 class="mainheader">Recent Events</h1>
			<EventsList />
			{/* <iframe class="max-w-3xl m-4 mx-auto bg-white w-full" height="480px" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=YXp0ZWNzLmFjbUBnbWFpbC5jb20&src=NGEwNGNlODI4ZTg3NzI5Mjc2ZGVkNWIyZDk5YWUxNmYzNDJjZjUxN2ZmOTM4OWE1OWViYzNkYjNmYmFkNDA4ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MWU3OWI1NTM0MzI5MGJlNWM3YmY5MzVmNjFmNDhmODkwNmIxZTkxZDI2MTE2ZWRjMjZiOWViYmZlMTZkNmNmOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODZkNTY1ZmQ3NDYxYmQyNzRhODE4YWQ3ODk3MGM2MGRhMDNhNjgyZTcwZTBjNzIwNjJjODEyYmE4YjE3OTBiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NmRmNmZjZTgyYjhmYzYwNDdiNmE0NTIzNzExODk2YmY1NWMwZjI4YTQ1MzYzODI5MjdlYjY4MjQ3NGU0ZDcxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5&color=%238E24AA&color=%23AD1457&color=%23F09300" /> */}
		</section>
	);
}

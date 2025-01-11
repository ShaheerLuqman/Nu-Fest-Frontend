export const fetchEvents = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASEURL}/events/getevents`
  );
  if (response.ok) {
    return await response.json();
  } else {
    console.error("Failed to fetch events");
    return [];
  }
};

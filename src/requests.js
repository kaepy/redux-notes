const baseUrl = "http://localhost:3001/notes";

// Fetch notes from the backend service
export const getNotes = async () => {
  const response = await fetch(baseUrl); // Fetch notes from backend
  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return await response.json(); // Parse and return the JSON response
};

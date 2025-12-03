const baseUrl = "http://localhost:3001/notes";

// Fetch all notes from the backend service
const getAll = async () => {
  const response = await fetch(baseUrl);

  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  // Parse and return the JSON data
  //const data = await response.json();
  //return data;

  // More concise way to return the parsed JSON data
  return await response.json();
};

export default { getAll };

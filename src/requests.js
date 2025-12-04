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

// Create a new note
export const createNote = async (newNote) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newNote),
  };

  // Send the POST request to create a new note
  const response = await fetch(baseUrl, options);

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json();
};

// Update an existing note
export const updateNote = async (updatedNote) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedNote),
  };

  const response = await fetch(`${baseUrl}/${updatedNote.id}`, options);

  if (!response.ok) {
    throw new Error("Failed to update note");
  }

  return await response.json();
};

const baseUrl = "http://localhost:3001/notes";

// Fetch all notes from the backend service
const getAll = async () => {
  const response = await fetch(baseUrl);

  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return await response.json(); // Parse and return the JSON response
};

// Create a new note with the given content
const createNewNote = async (content) => {
  // Define the request options for the HTTP request
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, important: false }), // JS-object converted to JSON string
  };

  // Send the POST request to create a new note
  const response = await fetch(baseUrl, options);

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json(); // Parse and return the JSON response
};

// Toggle the importance of a note by its ID
const toggleImportanceOf = async (id, important) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ important }),
  };

  const response = await fetch(`${baseUrl}/${id}`, options);

  if (!response.ok) {
    throw new Error("Failed to update note importance");
  }

  return await response.json();
};

export default { getAll, createNewNote, toggleImportanceOf };

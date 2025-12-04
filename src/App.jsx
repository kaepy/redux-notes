import { useQuery } from "@tanstack/react-query";
import { getNotes } from "./requests";

const App = () => {
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    console.log(content);
  };

  const toggleImportance = (note) => {
    console.log("toggle importance of", note.id);
  };

  // Use React Query to fetch notes
  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  // Debugging: log the result object
  console.log(JSON.parse(JSON.stringify(result)));

  // Handle loading state
  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const notes = result.data; // Extract notes from the result

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : ""}</strong>
        </li>
      ))}
    </div>
  );
};

export default App;

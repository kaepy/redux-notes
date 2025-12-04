import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "./requests";

const App = () => {
  const queryClient = useQueryClient(); // Access the QueryClient

  // Set up mutation for creating a new note
  const newNoteMutation = useMutation({
    mutationFn: createNote, // Function to create a new note

    // On success, invalidate the 'notes' query to refetch the notes
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] }); // Invalidate notes query to refetch
    },
  });

  // Set up mutation for updating a note
  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  // Handler for adding a new note
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    // console.log(content);
    newNoteMutation.mutate({ content, important: true }); // Trigger the mutation
  };

  const toggleImportance = (note) => {
    // console.log("toggle importance of", note.id);
    updateNoteMutation.mutate({ ...note, important: !note.important });
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

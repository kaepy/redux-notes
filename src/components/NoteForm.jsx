import { useDispatch } from "react-redux";
import { appendNote } from "../reducers/noteReducer";

const NoteForm = () => {
  const dispatch = useDispatch();

  // Handler for adding a new note
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";

    // Create the new note via the note service
    dispatch(appendNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NoteForm;

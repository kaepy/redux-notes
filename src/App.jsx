import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state); // sama kuin (state) => { return state } eli hakee kaikki muistiinpanot
  // Hakisi vain tärkeät muistiinpanot: const importantNotes = useSelector(state => state.filter(note => note.important))

  // muistiinpanon lisäyksen käsittelevä metodi dispatchaa muistiinpanon lisäävän actionin
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
  };

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content}
            <strong>{note.important ? " important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

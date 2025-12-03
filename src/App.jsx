import { useEffect } from "react";
import { useDispatch } from "react-redux";

import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { setNotes } from "./reducers/noteReducer";
import noteService from "./services/notes";

const App = () => {
  const dispatch = useDispatch();

  // Fetch notes from the backend and set them in the Redux store
  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  }, [dispatch]); // Added dispatch to dependency array to avoid warnings

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;

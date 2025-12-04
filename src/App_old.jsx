import { useEffect } from "react";
import { useDispatch } from "react-redux";

import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { initializeNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();

  // Fetch notes from the backend and set them in the Redux store
  useEffect(() => {
    dispatch(initializeNotes()); // Dispatch the thunk action to fetch and set notes
  }, [dispatch]); // Added dispatch to dependency array to avoid warnings

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;

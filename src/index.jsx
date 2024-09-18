// Yksinkertainen Redux muistiinpano esimerkki

import ReactDOM from "react-dom/client";

// Nykysuositus on käyttää configureStore funktiota createStoren sijasta
import { createStore } from "redux";

import noteReducer from "./reducers/noteReducer";

const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
});

// action creator
const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

// action creator
const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
};

const App = () => {
  // muistiinpanon lisäyksen käsittelevä metodi dispatchaa muistiinpanon lisäävän actionin
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    store.dispatch(createNote(content));
  };

  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content}
            <strong>{note.important ? " important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Koko sovelluksen renderöinnin suorittava funktio
const renderApp = () => {
  root.render(<App />);
};

// Suorittaa sovelluksen ensimmäisen renderöinnin, ilman tätä sitä ei tapahtuisi ollenkaan
renderApp();

// renderApp kuuntelee storen muutoksia metodilla subscribe
store.subscribe(renderApp);

/* Selain antoi virheen ennen kuin reducer siirrettiin omaan moduuliinsa:
Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed 
to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
*/

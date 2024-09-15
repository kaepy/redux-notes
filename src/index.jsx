// Redux laskuri esimerkki

import ReactDOM from "react-dom/client";

// Nykysuositus on käyttää configureStore funktiota createStoren sijasta
import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// App renderöi laskurin arvon kysymällä sitä storesta metodilla store.getState()
// Nappien tapahtumankäsittelijät dispatchaavat suoraan oikean tyyppiset actionit storelle.
const App = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        plus
      </button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
        minus
      </button>
      <button onClick={() => store.dispatch({ type: "ZERO" })}>zero</button>
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

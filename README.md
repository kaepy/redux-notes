# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React Query on monipuolinen kirjasto joka jo nyt nähdyn perusteella yksinkertaistaa sovellusta. Tekeekö React Query monimutkaisemmat tilanhallintaratkaisut kuten esim. Reduxin tarpeettomaksi? Ei. React Query voi joissain tapauksissa korvata osin sovelluksen tilan, mutta kuten dokumentaatio toteaa

React Query is a server-state library, responsible for managing asynchronous operations between your server and client
Redux, etc. are client-state libraries that can be used to store asynchronous data, albeit inefficiently when compared to a tool like React Query

React Query on siis kirjasto, joka ylläpitää frontendissä palvelimen tilaa, eli toimii ikäänkuin välimuistina sille, mitä palvelimelle on talletettu. React Query yksinkertaistaa palvelimella olevan datan käsittelyä, ja voi joissain tapauksissa eliminoida tarpeen sille, että palvelimella oleva data haettaisiin frontendin tilaan. Useimmat React-sovellukset tarvitsevat palvelimella olevan datan tilapäisen tallettamisen lisäksi myös jonkun ratkaisun sille, miten frontendin muu tila (esim. lomakkeiden tai notifikaatioiden tila) käsitellään.

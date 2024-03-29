import List from "./List";
import data from "./data";
import React, { useState } from "react";
const App = () => {
  const [people, setPeople] = useState(data);
  const clearAll = () => {};
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} {...people}></List>
        <button
          className="btn btn-block"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;

import React from "react";
import Person from "./Person";

function List({ people }) {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person}></Person>;
      })}
    </section>
  );
}

export default List;

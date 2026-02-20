import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [people, setPeople] = useState([]);

  const handleSave = (person) => {
    setPeople([...people, person]);
  };

  const handleDelete = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">My Phone Book ✨</h1>

      <Form onSave={handleSave} />

      <div className="cards">
        {people.map((person) => (
          <Card
            key={person.id}
            person={person}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
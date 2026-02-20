import UIButton from "./UIButton";

function Card({ person, onDelete }) {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Address: {person.address}</p>
      <p>Gender: {person.gender}</p>

      <UIButton
        text="Delete 🗑"
        type="delete"
        onClick={() => onDelete(person.id)}
      />
    </div>
  );
}

export default Card;
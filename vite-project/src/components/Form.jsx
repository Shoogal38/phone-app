import { useState } from "react";
import UIButton from "./UIButton";

function Form({ onSave }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const newPerson = {
      id: Date.now(),
      name,
      age,
      address,
      gender,
    };

    onSave(newPerson);

    setName("");
    setAge("");
    setAddress("");
    setGender("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <UIButton text="Save 💾" onClick={handleSubmit} />
    </div>
  );
}

export default Form;
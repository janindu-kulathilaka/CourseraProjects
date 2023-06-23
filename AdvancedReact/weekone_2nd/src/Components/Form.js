import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="Field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={!name} type="submit">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;

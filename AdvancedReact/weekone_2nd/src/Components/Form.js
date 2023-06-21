import React from "react";

function Form() {
  return (
    <div>
      <form>
        <fieldset>
          <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Name" />
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;

import React, { useState } from "react";

function NameForm({onSubmit}) {
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
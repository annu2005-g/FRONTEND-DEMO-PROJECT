import React, { useRef } from "react";

function Form() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameRef}
        placeholder="Enter Name"
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
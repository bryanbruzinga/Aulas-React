import React from "react";

const Radio = ({ pergunta, options, value, id, onChange, active }) => {

  if(active === false) return null
  return (
    <fieldset style={{ padding: "2rem" }}>
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ marginBottom: "1rem", display: "block" }}>
          <input
            type="radio"
            checked={value === option}
            value={option}
            onChange={onChange}
            id={id}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;

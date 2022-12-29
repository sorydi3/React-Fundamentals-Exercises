import React from "react";
import PropTypes from "prop-types";

export default function InputField({value,onChange,addItem}) {

    const handleChange = (e) => {

        onChange(e.target.value);
        console.log(value);
    }

    const inputIsEmpty = () => {
        return value === "";
    }

  return (  
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    </div>
  );
}


PropTypes.InputField = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}
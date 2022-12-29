import React from "react";
import PropTypes from "prop-types";

const InputField = ({ value, onChange }) => (

    <form>
        <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
        <button type="submit">Send</button>
    </form>

);

export default InputField;
import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

export default function Dasboard() {
    const [value, setValue] = React.useState("");
    return (
        <div>
            <InputField value={value} onChange={setValue} />
        </div>
    );
}
import React from "react";
import PropTypes from "prop-types";

export default function Message({ message,index }) {
    return (
        <li
         className={ message.username === "Amy" ? "message sender" : "message recipient"}
         key={index}
        >
        <p>{`${message.username}: ${message.message}`}</p>
        </li>
    );
    }
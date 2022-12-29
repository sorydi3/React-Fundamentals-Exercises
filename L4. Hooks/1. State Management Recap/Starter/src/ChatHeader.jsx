import React from "react";
import PropTypes from "prop-types";

export default function ChatHeader({ name }) {
  return (
    <div>
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{name.username}</div>
    </div>
  );
}

PropTypes.ChatHeader = {
    name: PropTypes.string.isRequired
};
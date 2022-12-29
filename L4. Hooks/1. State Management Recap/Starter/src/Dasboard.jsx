import React from "react";
import PropTypes from "prop-types";
import Chat from "./Chat";

export default function Dasboard({messages,users}) {
    const [value, setValue] = React.useState({ username: "", message: "" });
    return (
        <div className="container">
            <Chat messages={messages} name={users[0]} message={value} onMessageChangee={setValue} />
            <Chat messages={messages} name={users[1]} message={value} onMessageChangee={setValue} />
        </div>
    );
}
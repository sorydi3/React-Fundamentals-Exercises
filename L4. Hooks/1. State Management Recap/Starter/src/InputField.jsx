import React from "react";
import PropTypes from "prop-types";


export default function InputField({ message, onMessageChange,username,messages}) {
    const handleSubmit = (e) => {
        onMessageChange({username:username, message: e.target.value});
    };

    const handleSend = () => {
        messages.push(message);
        onMessageChange({username:username, message: ""});
    };

    return (
        <div>
        <input
            type="text"
            value={message.username===username ? message.message : ""}
            onChange={handleSubmit}
        />
        <button onClick={handleSend}>Send</button>
    </div>
    );
}




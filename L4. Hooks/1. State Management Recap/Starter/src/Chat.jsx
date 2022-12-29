import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import ChatHeader from "./ChatHeader";
import ListMessage from "./ListMessage";

export default function Chat({messages,name,message,onMessageChangee }) {
    
    return (
        <div className="chat-window">
            <ChatHeader name={name} />
            <ListMessage messages={messages} />
            <InputField message={message} onMessageChange={onMessageChangee} username={name.username} messages={messages}  />
           
        </div>
    );
}

/*
 <ChatHeader name={name} />
            <ListMessage messages={messages} />
*/
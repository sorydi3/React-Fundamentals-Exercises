import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import ChatHeader from "./ChatHeader";
import ListMessage from "./ListMessage";

export default function Chat({essages, onSendMessage }) {
    return (
        <div>
            <ChatHeader />
            <ListMessage messages={messages} />
            <InputField onSendMessage={onSendMessage} />
        </div>
    );
}
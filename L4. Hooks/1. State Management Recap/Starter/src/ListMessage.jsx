import  React  from   'react' ;
import PropTypes  from   'prop-types' ;
import Message from   './Message' ;

export default function  ListMessage ({ messages })  {
    return (
        <ul className="message-list">
            {messages.map((message, index) => (
               <Message key={index} message={message} />
            ))}
        </ul>
    );
}
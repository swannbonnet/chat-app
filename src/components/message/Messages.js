import React from 'react';
import './Message.css';

export default function Messages({message, user}) {

    const isUser = user === message.username;

    return (
        <div className={isUser ? 'message_user_container' : 'message_container'}>

            <div className={isUser ? 'message__user' : 'message'}>
                <p> <span className='username_container'>{!isUser && `${message.username} :`}</span> {message.message}</p>
            </div>
            
        </div>
    )
}

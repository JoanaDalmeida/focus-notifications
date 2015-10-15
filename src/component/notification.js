//Dependencies
import React, { Component , PropTypes} from 'react';
import {notification as style} from './style';
const propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    author: PropTypes.string
};

const Notification = ({author, date, content, title, type}) => {
    return (
        <div data-focus='notification' data-type={type} style={style}>
            <h2>{title}</h2>
            <div>{content}</div>
            <div>{date}</div>
        </div>
    );
};

Notification.propTypes = propTypes;
Notification.displayName = 'Notification';

export default Notification;

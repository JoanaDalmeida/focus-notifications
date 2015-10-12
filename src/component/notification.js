//Dependencies
import React, { Component , PropTypes} from 'react';

const propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    author: propTypes.string
};

const Notification = ({author, date, content, title, type}) => {
    return (
        <div dataFocus='notification' dataType={type}>
            <h2>{title}</h2>
            <div>{content}</div>
            <div>{date}</div>
        </div>
    );
};

Notification.propTypes = propTypes;

export default Notification;

//Dependencies
import React, { Component , PropTypes} from 'react';

const propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

const NotificationError = ({type, content}) => {
    return (
        <div data-focus='notification-error' data-type={type}>
            {type} {'----'}{content}
        </div>
    );
};

NotificationError.propTypes = propTypes;
NotificationError.displayName = 'NotificationError';
export default NotificationError;

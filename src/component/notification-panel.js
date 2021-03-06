//Dependencies
import React, { Component , PropTypes} from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import NotificationError from './notification-error';

import { addNotification, readNotification, readNotificationGroup, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';

const propTypes = {
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onDismissError: PropTypes.func.isRequired,
    hasAddNotif: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    unreadNotifs: PropTypes.array.isRequired,
    onGroupRead: PropTypes.func.isRequired,
    onSingleRead: PropTypes.func.isRequired,
    onClosePanel: PropTypes.func.isRequired,
    onTitleClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired
};

const NotificationCenterPanel = ({hasAddNotif,isFetching, unreadNotifs, onGroupRead, onSingleRead, onClosePanel, onTitleClick, onAddClick, onDismissError, error}) => {
    console.log(error);
    return (
        <div data-fetching={isFetching} data-focus='notification-center-panel'>
            <header>
                <button className='mdl-button mdl-button--icon'  data-focus='notification-center-close' onClick={onClosePanel}>
                  <i className="material-icons">{'clear'}</i>
                </button>
                <h1 onClick={onTitleClick}>{`Notification center (${unreadNotifs.length})`}</h1>
            </header>
            {
                hasAddNotif &&
                <NotificationAdd onAddClick={onAddClick} />
            }
            {
                error &&
                <NotificationError onDismiss={onDismissError} {...error}/>
            }
            <NotificationGroup
                data={unreadNotifs}
                onGroupRead={onGroupRead}
                onSingleRead={onSingleRead}
            />
        </div>
    );
};

NotificationCenterPanel.propTypes = propTypes;

export default NotificationCenterPanel;

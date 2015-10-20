import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NotificationCenter from '../component/notification-center';
import createStore from '../store/create';
import { addNotifications } from '../actions';
import {exampleStyle as style} from './style'
// Create the global redux store.
const store = createStore();

// Initial store population
const mockNotifs = [
    {title: 'TITRE', content: 'CONTENT ...', date: new Date().toISOString(), type: 'info', author: 'joe.lopez@gmail.com'},
    {title: 'TITRE 2', content: 'CONTENT 2 ...', date: new Date().toISOString(), type: 'info', author: 'david.lopez@gmail.com'},
    {title: 'TITRE 3', content: 'CONTENT 3 ...', date: new Date().toISOString(), type: 'info', author: 'joe.lopez@gmail.com'}
];
//store.dispatch(addNotifications(mockNotifs));

// Create the react component when the DOM is loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    const rootElement = document.getElementById('root');
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    ReactDOM.render(
        <Provider store={store}>
            <div style={style}><NotificationCenter hasAddNotif={false} /></div>
        </Provider>,
    rootElement);
});

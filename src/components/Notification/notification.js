import React from "react";
import PropTypes from 'prop-types';
import './notification.css'

export default function Notification({ message }) {
   return ( <p className="message">{ message}</p>)
}
Notification.propTypes = {
    message: PropTypes.string.isRequired
}
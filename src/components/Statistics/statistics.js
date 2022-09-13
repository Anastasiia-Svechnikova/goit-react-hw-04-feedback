import React from "react";
import PropTypes from 'prop-types';
import './statistics.css'

export default function Statistics({ good, bad, neutral, total, positivePercentage }) {
    
const percentageOfPositive = isNaN(positivePercentage)? 0: `${Math.round(positivePercentage)}%`

    return (
        <ul className="stat">
            <li className="stat-item">
                Good: <span className="stat-num">{good}</span>
            </li>
             <li className="stat-item">
                Bad: <span className="stat-num">{bad}</span>
            </li>
             <li className="stat-item">
                Neutral: <span className="stat-num">{neutral}</span>
            </li>
             <li className="stat-item">
                Total: <span className="stat-num">{total}</span>
            </li>
             <li className="stat-item">
                Positive: <span className="stat-num">{ percentageOfPositive }</span>
            </li>
        </ul>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
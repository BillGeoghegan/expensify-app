import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description = '', note = '', amount = 0, createdAt = 0}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>
            <p>{note}</p>
        </div>
    );
}

export default ExpenseListItem;
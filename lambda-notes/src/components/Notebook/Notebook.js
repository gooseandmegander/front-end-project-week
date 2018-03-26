import React from 'react';

import Note from '../Note/Note';
import './Notebook.css';

function Notebook() {
    return (
        <div class='notes-container col'>
            <h3 class='col-12'>Your notes:</h3>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
};

export default Notebook;
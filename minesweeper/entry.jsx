import React from 'react';
import ReactDOM from 'react-dom';
import {Mindsweeper} from "./minesweeper.js"


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<ClickCounter />, root);
  });


 
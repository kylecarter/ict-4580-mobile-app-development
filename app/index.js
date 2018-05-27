'use strict'

// Node Modules
import React from "react"
import ReactDOM from "react-dom"

// Page
import Main from "./views";


document.addEventListener('deviceready', ( e )=> {
  console.log( e.type )
  ReactDOM.render(
    <Main />, 
    document.getElementById( 'root' )
  );
}, false);

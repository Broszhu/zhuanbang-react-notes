import React, { Component } from 'react';
function Avatar(props){
    return(
        <img className="avatar-module"
            src={props.user.url}
            alt={props.user.name}
        />
    )
}
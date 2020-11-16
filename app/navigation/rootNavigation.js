import React from 'react';

export const navigationRef = React.createRef(); 

const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params); //if !null, navigate method called + args passed (navigate method)
}

export default {
    navigate
}
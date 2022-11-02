import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const parentContext = createContext();


export function ParentProvider(props) {

    const [blackCount, setBlackCount] = useState(0);

    return (
        <parentContext.Provider value={[blackCount, setBlackCount]}>
            {props.children}
        </parentContext.Provider>
    )

}
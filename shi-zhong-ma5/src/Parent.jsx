import React from 'react';
import Child from './Child';
import { useState } from 'react';
import { useContext } from 'react';
import { parentContext, ParentProvider } from './ParentProvider';
import "./Parent.css";

function Parent() {
    const [color1, setColor1] = useState('white');
    const [color2, setColor2] = useState('white');
    const [color3, setColor3] = useState('white');
    const [color4, setColor4] = useState('white');
    const [blackCount, setblackCount] = useContext(parentContext);

    function changeColor(color, func) {
        func(color === 'white' ? 'black' : 'white');
        setblackCount(color === 'white' ? blackCount + 1 : blackCount - 1);
    }


    return (
        <div>
            <div className="container"><h2>Count: &nbsp; {blackCount}</h2></div>
            <div className='container'>
                <div>
                    <Child color={color1} setColor={function () { changeColor(color1, setColor1) }}></Child>
                    <Child color={color2} setColor={function () { changeColor(color2, setColor2) }}></Child>
                </div>
            </div>
            <div className='container'>
                <div>
                    <Child color={color3} setColor={function () { changeColor(color3, setColor3) }}></Child>
                    <Child color={color4} setColor={function () { changeColor(color4, setColor4) }}></Child>
                </div>
            </div>
        </div>
    );
}
export default Parent;
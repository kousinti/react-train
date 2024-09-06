"use client";
import { useState } from 'react';
import Header from "./header";
import Body from "./body";
import Footer from "./footer";


export default () => {
    const [state, setState] = useState([1, 2]);
    const [flag, setFlag] = useState(0);
    
    const onPush = (val: number) => {
        setState(state => ([...state, val]))
    }

    const onFocus = () => {
        setFlag(flag+1);
    }

    return (
        <div>
            <Header state={state}/>
            <Body flag={flag}/>
            <Footer onPush={onPush} onFocus={onFocus}/>
        </div>
        
    )
}
"use client"
import {useEffect} from "react";

export default function NativeEvent() {
    function handleClick(){
        console.log("NativeEvent clicked");
    }
    useEffect( () => {
        document.addEventListener('click',handleClick );
        return () => {document.removeEventListener('click',handleClick);};
    },[])
    return(
        <div>
            Native Event
        </div>
    )
}
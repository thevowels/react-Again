"use client"

import {useEffect} from "react";

export default function CleanupDemo() {
    useEffect(() => {
         console.log('initializing useEffect');
         return(() => console.log('cleanup'));
    }, []);

    return(
        <div>
            <h3>Cleanup Demo</h3>
        </div>
    )
}
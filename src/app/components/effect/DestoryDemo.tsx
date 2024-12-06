"use client"
import CleanupDemo from "@/app/components/effect/CleanupDemo";
import {useState} from "react";
import NativeEvent from "@/app/components/effect/NativeEvent";

export default function DestroyDemo() {

    const [ show, setShow ] = useState(false);
    return(
        <div>
            {show && <NativeEvent />}
            <button onClick={() => setShow(!show)} >Toggle</button>
        </div>
    )
}
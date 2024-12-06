"use client"

import {useEffect, useState} from "react";

export default function ShowUser() {

    const [users , setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    },[])

    return(
        <div>
            Users
            {users.length>1 && users.map( (user :{id:string, name:string}) => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}
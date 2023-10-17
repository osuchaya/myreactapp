import { useApi } from "../api";
import { useState } from "react";
import Button from "../components/Button";
import React from 'react';
import { Input, Header } from 'semantic-ui-react';
//declare styled components

export const RegisteredPage = ()=> {
    const api = useApi();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    // console.log(firstName, age);
    // _ prefix functions in React i.e. private to this component
    const _handleSubmit = async ()=> {
        const result = await api.post("users", {
            firstName, lastName, age
            // above is "shorthand" way to write when backend key and frontend value names matches 
            // backend: frontend input
        })
        console.log(result)
        
    }
    
    
    return (
    <div>
        <h2 class="ui block header">Log into your account</h2>

        <Input className="p-3" focus label="First name" placeholder="e.g. Adam" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></Input>
        <Input focus label="Last name" placeholder="e.g. Smith" value={lastName} onChange={(e)=> setLastName(e.target.value)}></Input>
        <Input focus label="Age" placeholder="e.g. 25" value={age} onChange={(e)=> setAge(e.target.value)}></Input>
        <Button.Signin type="submit" onClick={_handleSubmit}>Sign in</Button.Signin>
    </div>
    )
}
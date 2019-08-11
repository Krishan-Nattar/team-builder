import React, {useState} from 'react';



const Form = (props) => {
    return ( 

    <form onSubmit={(event)=>props.handleForm(event)}>
        <label>
            Name:
            <input value={props.member.name} onChange={event=>props.handleChange(event)} type="text"name="name"/>
        </label>
        <br />
        <label>
            Email:
            <input value={props.member.email} onChange={event=>props.handleChange(event)} type="email"name="email"/>
        </label>
        <br />
        <label>
            Role:
            <input value={props.member.role} onChange={event=>props.handleChange(event)} type="text" name="role"/>
        </label>
        <br />
        <button>Submit!</button>
    </form> 
    
    );
}



export default Form;
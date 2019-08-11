import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {

  const handleForm=(event)=>{
    event.preventDefault();
    if(newMember.name !="" && newMember.email != "" && newMember.role != ""){
      setTeam([...team, newMember])
    setNewMember({
      name: "",
      email: "",
      role: ""
    });
    }
    
  }

  const [team, setTeam] = useState([
    

    {
      name: "Krishan",
      email: "krishansemail@email.com",
      role: "Consultant"
    },
    {
      name: "Billy",
      email: "Billy@email.com",
      role: "Manager"
    },
    {
      name: "Jane",
      email: "Jane@email.com",
      role: "CEO"
    },
  ]);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = (event)=>{
    setNewMember({...newMember, [event.target.name]:event.target.value})
  }

  
  return (
    <div className="App">
      <h1>Meet The Team</h1>
      {team.map((member, index)=>{
        return (
          <div key={member.email}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button>EDIT</button>
          </div>
        );
      })}
      <Form handleForm={handleForm} handleChange={handleChange} member={newMember} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

function App() {
  const handleForm = event => {
    event.preventDefault();

    if (edit === false) {
      if (
        newMember.name != "" &&
        newMember.email != "" &&
        newMember.role != ""
      ) {
        setTeam([...team, newMember]);
        setNewMember({
          name: "",
          email: "",
          role: ""
        });
      }
    } else {
      if (
        memberToEdit.name != "" &&
        memberToEdit.email != "" &&
        memberToEdit.role != ""
      ) {
        // setTeam([...team, memberToEdit]);
        let newTeam = [...team];
        // newTeam.pop(editIndex);
        newTeam.splice(editIndex, 1, memberToEdit);
        setTeam(newTeam);

        setNewMember({
          name: "",
          email: "",
          role: ""
        });
        setEdit(false);
      }
    }
  };

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
    }
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

  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = event => {

    if(event.target.name === "name" && (/^[a-zA-Z ]+$/.test(event.target.value))===false) {
      
return;
      // return

    }
    if (edit === false) {
      setNewMember({ ...newMember, [event.target.name]: event.target.value });
    } else {
      setMemberToEdit({
        ...memberToEdit,
        [event.target.name]: event.target.value
      });
    }
  };

  const editMember = (member, index) => {
    setMemberToEdit({ ...member });
    setEdit(true);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Meet The Team</h1>
      {team.map((member, index) => {
        return (
          <div key={member.email}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button
              onClick={() => {
                editMember(member, index);
              }}
            >
              EDIT
            </button>
          </div>
        );
      })}
      <Form
        handleForm={handleForm}
        handleChange={handleChange}
        member={newMember}
        edit={edit}
        memberToEdit={memberToEdit}
      />
    </div>
  );
}

export default App;

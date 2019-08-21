import React from "react";

const Form = props => {
  const setValue = thisName => {
    if (props.edit === false) {
      return props.member[thisName];
    } else {
      return props.memberToEdit[thisName];
    }
  };
  return (
    <form onSubmit={event => props.handleForm(event)}>
      <label>
        Name:
        <input
          value={setValue("name")}
          onChange={event => props.handleChange(event)}
          type="text"
          name="name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          value={setValue("email")}
          onChange={event => props.handleChange(event)}
          type="email"
          name="email"
        />
      </label>
      <br />
      <label>
        Role:
        <input
          value={setValue("role")}
          onChange={event => props.handleChange(event)}
          type="text"
          name="role"
        />
      </label>
      <br />
      <button>Submit!</button>
    </form>
  );
};

export default Form;

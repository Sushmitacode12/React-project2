import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');
    
  const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
          setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age',
          });
          return;
        }
        if(+enteredAge < 1) {
          setError({
            title: 'Invalid Age',
            message: 'Please enter a Valid age',
          });
          return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
        
    };

    const userNameChangeHandler = (event) => {
      setEnteredUserName(event.target.value);
      
    };

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };

    const errorHandler = (event) => {
      setError(null);
    };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} />}
    <Card classname={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
            id="username"
             type="text"
             value={enteredUsername}
             onChange={userNameChangeHandler} 
             />
        <label htmlFor="age"> Age (Years)</label>
        <input 
          id="age" 
          type="number" 
          value={enteredAge} 
          onChange={ageChangeHandler} 
          />
        <Button type="submit">Add User</Button>
      </form>
      </Card>
      </div>
    );
};

export default AddUser;
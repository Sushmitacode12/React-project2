import React, { useState } from 'react';

import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const [usersList, setUserList] = useState('');

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge id: Math.random.toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={UsersList}/>
    </div>
  );
}

export default App;

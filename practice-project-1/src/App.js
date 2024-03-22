import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      {userList.length !== 0 && <UsersList users={userList} />}
    </React.Fragment>
  );
}

export default App;

import AddUser from './components/users/AddUser.js';
import Card from './components/style/Card.js';
import classes from './components/style/AddUser.module.css';
import UserList from './components/users/UserList.js';
import React, { useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    //append the new input to the new one
    setData((prevData) => {
      return [
        ...prevData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // <Card className={classes.test}>

    //   <div className={classes.test}>hey</div>
    // </Card>

    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={data} />
    </div>
  );
}

export default App;

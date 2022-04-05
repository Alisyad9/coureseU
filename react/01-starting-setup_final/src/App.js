import AddUser from './components/users/AddUser.js';
import Card from './components/style/Card.js';
import classes from './components/style/AddUser.module.css';
import UserList from './components/users/UserList.js';
function App() {
  return (
    // <Card className={classes.test}>

    //   <div className={classes.test}>hey</div>
    // </Card>
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;

import AddUser from './components/users/AddUser.js';
import Card from './components/style/Card.js';
import classes from './components/style/AddUser.module.css';
function App() {
  return (
    <Card className={classes.test}>
      <AddUser />
      <div className={classes.test}>hey</div>
    </Card>
  );
}

export default App;

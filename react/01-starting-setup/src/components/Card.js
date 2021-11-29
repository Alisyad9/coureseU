import '../css/Card.css';

function Card(props) {
  //   console.log('props.className result-->', props.className);
  //   console.log('props.children result-->', props.children);

  const classes = props.className + ' card';
  return <div className={classes}> {props.children}</div>;
}

export default Card;

import ListItem from "../List/List";

function Condition(props) {
  const isLogin = props.isLogin;

  let greeting;

  if (isLogin) {
    greeting = <ListItem />;
  } else {
    greeting = <h3>You have to login</h3>;
  }
  return <div>{greeting}</div>;
}
export default Condition;

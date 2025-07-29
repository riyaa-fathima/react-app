import ListItem from "./List";

function Condition(props) {
    const isLogin = props.isLogin;

    if (isLogin) {
        return <h1> <ListItem/> </h1>;
    }
    else {
        return <h1>You have to login</h1>;
    }
}
export default Condition;
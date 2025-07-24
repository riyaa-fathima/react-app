function ListItem(props) {
  console.log("props:", props)
  
return (
<div>
    <h2> {props.title} </h2>
    <ul>
      <li >{props.movieOne}</li>
      <li >{props.movieTwo}</li>
    </ul>
</div>
);
}

export default ListItem;

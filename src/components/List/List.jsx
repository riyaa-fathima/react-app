import { useContext } from "react";
import { FruitContext } from "../../App";
import ListItem from "../ListItem/ListItem";


function List() {
  const fruits = useContext(FruitContext)
return (
<div>
  <h4>list</h4>
  <ListItem/>
</div>
);
}


export default List;

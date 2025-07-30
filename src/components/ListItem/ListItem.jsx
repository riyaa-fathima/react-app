import { useContext } from "react";
import { FruitContext } from "../../App";
function ListItem() {
  const fruits = useContext(FruitContext);
  return (
    <div>
      {fruits.map((fruit) => {
        return <h4 key={fruit.id}> {fruit.name} </h4>;
      })}
    </div>
  );
}
export default ListItem;

function ListItem() {
return (
<div>
  {fruits.map ((fruit) =>{
    <h1>Fruits</h1>})}
</div>
);
}

const fruits = [
  {id: "abc -123" , name : "Apple" } ,
  {id: "bcd -223" , name : "Orange" },
  {id: "cde -345" , name : "Kiwi" }
];

export default ListItem;

export default function ListArea({items}){
    return (
        <>
      
        {items.map((item) => (
          <li className="list" key={item.id}>{item.name}</li>
        ))}
        </>
    );
}
import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <div style={{ display: "flex" }}>
            {items.length > 0 && items.map((item)=>(
                
                <Item key={item.id} item={item}/>
                ))}
                
        </div>
    )
}
export default ItemList
import Items from "../Items/Items"

const ItemList = () => {
  return (
    <div>
        <div className="container-fluid">
                
                {
                    productos.map( product => (
                        <Items {...product} key={product.id} />
                    ))
                }
            
        </div>
    </div>
  )
}

export default ItemList
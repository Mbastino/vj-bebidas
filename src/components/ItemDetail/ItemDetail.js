
const ItemDetail = ({producto}) => {
  return (
    <div key={producto.id}>
        <img className="" alt={producto.name} src={producto.image}/>
        <h2 className="">{producto.name}</h2> 
        <h4 className="">{producto.description}</h4>
        <h5>Precio: ${producto.price}</h5>
    </div>
  )
}

export default ItemDetail
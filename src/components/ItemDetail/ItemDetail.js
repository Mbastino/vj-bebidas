
const ItemDetail = ({product}) => {
  return (
    <div>
        <img className="" alt={product.name} src={product.image}/>
        <h2 className="">{product.name}</h2> 
        <h4 className="">{product.description}</h4>
        <h5>Precio: ${product.price}</h5>
    </div>
  )
}

export default ItemDetail
import './itemCount.css'


const ItemCount = ({contador, actualizarValor, stock}) => {
   
   
    const onAdd = () => {
        if(stock === contador){
            alert('No puedes comprar mas del stock disponilbe')
            return
        }
        actualizarValor(contador + 1)
    }
    const restar = () => {
        if(contador === 0){
            return
        }
        actualizarValor(contador - 1)
    }
    return (
    <div className='countContainer'>
        <div className='counter'>   
            <button className='buttonCount' onClick={restar}>-</button>
            <div>
                <span>{contador}</span>
            </div>
            <button className='buttonCount' onClick={onAdd}>+</button>
        </div>
    </div>
  )
}

export default ItemCount
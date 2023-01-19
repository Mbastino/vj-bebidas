import './itemlistcontainer.css'
import { useEffect, useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'

const arreglo=[
  {
    id: 1, name: "Andes Rubia", description: "", price: 200, image: "/images/andesrubia.jpg", category: "Cervezas", stock: 100
  },
  {
    id: 2, name: "Andes Negra", description: "", price: 250, image: "/images/andesnegra.jpg", category: "Cervezas", stock: 100
  },
  {
    id: 3, name: "Andes Roja", description: "", price: 250, image: "/images/andesroja.jpg",
    category: "Cervezas", stock: 100
  },
  {
    id: 4, name: "Andes IPA", description: "", price: 300, image: "/images/andesipa.jpg",
    category: "Cervezas", stock: 100
  },
  {
    id: 5, name: "Imperial Larger", description: "", price: 200, image: "/images/imperiallarger.jpg", category: "Cervezas", stock: 100
  },
  {
    id: 6, name: "Imperial Golden", description: "", price: 200, image: "/images/imperialgolden.jpg", category: "Cervezas", stock: 100
  },
  {
    id: 7, name: "Imperial Roja", description: "", price: 250, image: "/images/imperialroja.jpg", category: "Cervezas", stock: 100
  },
  {
    id: 8, name: "Imperial IPA", description: "", price: 300, image: "/images/imperialipa.jpg", category: "Cervezas", stock: 100 
   },
  {
    id: 9, name: "Imperial APA", description: "", price: 300, image: "/images/imperialapa.jpg", category: "Cervezas", stock: 100
  },
  {
    id: 10, name: "Colon Malbec", description: "", price: 700, image: "/images/colonmalbec.jpg", category: "Vinos", stock: 100
  },
  {
    id: 11, name: "Colon Syrah", description: "", price: 750, image: "/images/colonsyrah.jpg", category: "Vinos", stock: 100
  },
  {
    id: 12, name: "Colon Cabernet Sauvignon", description: "", price: 850, image: "/images/coloncabernets.jpg", category: "Vinos", stock: 100
  },
  {
    id: 13, name: "Graffigna Malbec", description: "", price: 1000, image: "/images/grafmalbec.jpg", category: "Vinos", stock: 100
  },
  {
    id: 14, name: "Graffigna Syrah", description: "", price: 1300, image: "/images/grafsyrah.jpg", category: "Vinos", stock: 100
  },
  {
    id: 15, name: "Graffigna Cabernet Sauvignon", description: "", price: 1500, image: "/images/grafcabernets.jpg", category: "Vinos", stock: 100
  }
]


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(arreglo)
    }, 2000);
    });

useEffect(() =>{
  getProducts
  .then((response) => {setProductos(response)});
})    


    return (
    <div>
        <ul>
          {productos.map((producto)=>(
            <li key={producto.id}>{producto.name}</li>
          )) }
        </ul>
        <ItemCount/>
    </div>
    
  )
}

export default ItemListContainer
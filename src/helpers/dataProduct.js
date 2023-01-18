import allProducts from '../data/Products.json'

export const requestAllProducts = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(allProducts);
        }, 2000);
    }); 
}

export const requestProductsById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout( ()=>{
            const productos = allProducts.find(productos => productos.id === id);

            if (productos) {
                resolve(productos);
            }else {
                reject({
                    error: 'No se encontro el producto que buscabas'
                })
            }
        }, 2000);
    });
}
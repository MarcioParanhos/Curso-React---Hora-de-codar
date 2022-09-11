import './App.css';
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';


const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const {data: items} = useFetch(url)

  // 1 - Resgatando dados
  // useEffect(() => {
  //   async function fecthData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fecthData();
  // }, []);

  // 2 -  Adicionando Produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product),
    });

    // 3 - Carregamento Dinamico
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])
    setName("")
    setPrice("")
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {/* Map do Array para gerar a lista */}
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <h1>Adicionar Produtos</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;

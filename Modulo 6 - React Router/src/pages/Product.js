import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = () => {

    const { id } = useParams()

    const url = "http://localhost:3000/products/" + id
    const { data: product, loading, error } = useFetch(url)

    return <>

        {error && <p>Ocorreu um erro inesperado...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div className="product">
                <div className="card-product">
                    <h1>{product.name}</h1>
                    <p>ID do Produto: {id}</p>
                    <p>R$ {product.price}</p>
                    <div className="btn-container">
                        <Link className="btn-product" to={`/products/${product.id}/info`}>Mais Informações</Link>
                        <Link className="btn-product" to="/">Voltar</Link>
                    </div>
                </div>
            </div>
        )}
    </>
}

export default Product
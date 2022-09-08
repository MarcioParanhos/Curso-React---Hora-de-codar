import { useState } from "react"

const ConditionalComponent = () => {

    const [x] = useState(true)

    const [name, setName] = useState()

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, Sim</p>}
            {!x && <p>Agora o x e falso</p>}
            <h1>If Ternario</h1>
            {name ? (
                <div>
                    <p>O nome e {name}</p>
                </div>
            ) : (
                <div>
                    <p>O nome não foi encontrado</p>
                </div>
            )}
            <button onClick={() => setName("Pedro")}>Mudar nome para Pedro</button>
            <button onClick={() => setName("Marcio")}>Mudar nome para Marcio</button>
            <button onClick={() => setName("")}>Apagar Nome</button>
        </div>
    )
}

export default ConditionalComponent
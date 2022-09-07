const ChallengerComponent = () => {

    let a = 65665
    let b = 5451

    const somarValores = () => {
        let result = a + b
        console.log(result)
    }

    return (
        <div>
            <p>O primeiro numero e {a}</p>
            <p>O Segundo numero e {b}</p>
            <button onClick={somarValores}>Somar os Valores</button>
        </div>
    )
}
export default ChallengerComponent
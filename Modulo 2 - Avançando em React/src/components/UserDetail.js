const UserDetail = ({ name, age, profession }) => {
    return (
        <div>
            <div><h2>Nome: {name}</h2> <p>Idade: {age} Anos</p> <p>Profissão: {profession}</p></div>
            {age >= 18 ? (<p>Pode Tirar a CHN</p>) : (<p>Infelizmente não poderá tirar a CNH</p>)}
        </div>
    )
}

export default UserDetail
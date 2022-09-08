import './App.css';
import UserDetail from './components/UserDetail';
// import {useState} from 'react'
// import Message from './components/Message';
// import ExecuteFuunction from './components/ExecuteFuunction';
// import Container from './components/Container';
// import Pokemon from "./assets/img2.jpg"
// import CarDetails from './components/CarDetails';
// import ConditionalComponent from './components/ConditionalComponent';
// import ListRender from './components/ListRender';
// import ManageData from './components/ManageData';
// import ShowUserName from './components/ShowUserName';
// import Fragment from './components/Fragment';

function App() {
  // const [name, setName] = useState("Marcio Paranhos")
  // const brand = "Fiat"
  // const km = 1200
  // const color = "Vermelho"
  // const cars = [
  //   { id: 1, brand: "Ferrari", color: "vermelho", newCar: true, km: 0 },
  //   { id: 2, brand: "Bugati", color: "Preto", newCar: true, km: 0 },
  //   { id: 3, brand: "Lamborguine", color: "Prata", newCar: true, km: 0 }
  // ]

  // function showMessage() {
  //   console.log("Evento do Componente pai!")
  // }

  // const [message, setMessage] = useState("")
  // const handleMessage = (msg) => {
  //   setMessage(msg)
  // }

  const users = [
    { name: "Marcio", age: 29, profession: "Vagabundo" },
    { name: "Vera", age: 69, profession: "Dona de Casa" },
    { name: "Claudio", age: 45, profession: "Professor" },
    { name: "Thales", age: 8, profession: "Estudante" }
  ]

  return (
    <div className="App">
      <h1>Avaçando em React</h1>
      <div>
        {/* <img src="/img1.jpg" alt="" /> */}
      </div>
      <div>
        {/* <img src={Pokemon} alt="" /> */}
      </div>
      {/* <ManageData /> */}
      {/* <ListRender/> */}
      {/* <ConditionalComponent /> */}
      {/* <ShowUserName name={name} />
      <button onClick={() => setName("Zé Bonitinho")}>Mudar o nome para Zé Bonitinho</button> */}
      {/* <CarDetails brand={brand} km={km} color={color} />
      <CarDetails brand="VW" km={0} color="Azul" />
      <CarDetails brand="FORD" km={0} color="Cinza" /> */}
      {/* {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))} */}
      {/* LOOP */}
      {/* <Fragment /> */}
      {/* <Container>
      <p>Esse e o conteudo</p>
     </Container> */}
      {/* <ExecuteFuunction myFunction={showMessage} /> */}
      {/* <Message msg={message} /> */}
      {users.map((user) => (<UserDetail name={user.name} age={user.age} profession={user.profession} />))}
    </div>
  );
}

export default App;

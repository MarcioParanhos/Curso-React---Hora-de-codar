import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 1, brand: "Fiat", model: "Palio", price: 22000, color: "Azul", km: 100000, age: 2015 },
    { id: 2, brand: "Ford", model: "Focus", price: 37000, color: "Preto", km: 87000, age: 2018 },
    { id: 3, brand: "Renalt", model: "Clio", price: 12000, color: "Vermelho", km: 75000, age: 2011 },
    { id: 4, brand: "Renalt", model: "Sandero", price: 45000, color: "Preto", km: 240, age: 2021 }
  ]

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Carros semi-novos para revenda</h1>
      </header>
      <section className="cars-details">
        {cars.map((car) => (
          <CarDetails
            id={car.id}
            brand={car.brand}
            model={car.model}
            price={car.price}
            color={car.color}
            km={car.km}
            age={car.age}
          />))}
      </section>
    </div>
  );
}

export default App;

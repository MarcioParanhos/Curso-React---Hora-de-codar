const EventsComponent = () => {
  const handleMyEvent = (e) => {
    console.log("Ativou o Evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return (
        <h1>Renderizando isso</h1>
      )
    } else {
      return (
        <h1>Tambem posso renderizar isso</h1>
      )
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>Clique Aqui tambem</button>
        <button onClick={() => {
          if (true) {
            console.log("Isso nao deveria existir kkkk");
          }
        }}>Clica Aqui, Por Favor
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};
export default EventsComponent;

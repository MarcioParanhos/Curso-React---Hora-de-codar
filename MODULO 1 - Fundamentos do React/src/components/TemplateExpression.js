import MyComponent from "./MyComponent";

const TemplateExpression = () => {
  const name = "Marcio Vinicius de Borba Paranhos";
  const data = {
    age: 29,
    job: "Estudante",
  };

  return (
    <div>
      <h1>Olá meu nome é {name}, tenho {data.age} anos e atualmente sou {data.job} em programação.</h1>
      <MyComponent/>
    </div>
  );
};
export default TemplateExpression;

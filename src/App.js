//import { render } from "@testing-library/react";
import WelcomeComponent from "./components/welcome-component";

function App() {
  const welcomeMessage = <h1>This is the welcome message</h1>;
  const usersByFunction = ['Oskar', 'John', 'Henry']
  const usersByComponent = ['Stephen', 'Yuval', 'Isabel']
   

  function welcomeFunction() {
    return <p>this is the welcome by the function! </p>;
  }
  function hiUsersByFunction(name) {
    return <p>Hi, {name} !</p>
  }
  return (
    <>
      <div>{welcomeMessage}</div>
      <div>{welcomeFunction()}</div>
      <div>{usersByFunction.map(name => hiUsersByFunction(name))} </div>
      <p>Components Section, including click event</p>
      <div>
          {usersByComponent.map(name => <WelcomeComponent firstName={name}/> )}
      </div>
    </>
  );
}

export default App;


import { useState } from "react";
import WelcomeComponent from "./components/welcome-component";


function App() {
  const welcomeMessage = <h1>This is the welcome message</h1>;
  const usersByFunction = ['Oskar', 'John', 'Henry']
  const usersByComponent = ['Stephen', 'Yuval', 'Isabel']

  //toggle variable with an initial true state
  const [show, setShow] = useState(true)

   

  function welcomeFunction() {
    return <p>this is the welcome by the function! </p>;
  }
  function hiUsersByFunction(name) {
    return <p>Hi, {name} !</p>
  }


  function toggle(){
    setShow(!show)
    console.log(show);
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

      <button onClick={toggle}>Show/Hide section</button>
      {
        show ?
        <div>
          <h3>special content</h3>
        </div> : null
      }
    </>
  );
}

export default App;

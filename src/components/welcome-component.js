function WelcomeComponent({firstName}) {
    function handleClick(name){
        alert('hi ' + name)
    }
    return <p onClick={() => handleClick(firstName)}>Hi, welcome {firstName}! </p>
}

export default WelcomeComponent

// function Welcome({ firstName }) {
//     function handleClick(name) {
//       alert('Hello ' + name)
//     }
//     return <h1 onClick={() => handleClick(firstName)}>Hello, {firstName}!</h1>
//   }
  
//   export default Welcome
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//main App compoenent:

//This is the all pizza Data:
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//This is the root component:
function App() {
  return (
    <div className="container">
      {/*we can also use the component for multiple times*/}
      {/*this is called the nested component , we nest the component like this :*/}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header compoenet:
function Header() {
  // and we also design like this means store the style in the vraiables:
  const style = {};
  // we cam style our jsx component l ike this in inline css means using the attribute of the style in a tag:
  // return <h1 style={{color:"red",fontSize:"48",textTransform:"uppercase"}}>Fast React Pizza.Co</h1>
  return (
    <header className=" container header">
      <h1 style={style}>Fast React Pizza .Co</h1>
    </header>
  );
}

//Menu Component:
function Menu() {
  //pizza data is here:
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/*"&&" we can also use the && operator for the conditional rendering:*/}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic ittalian cuisine. 6 creative dishes to choose from . All
            from our stone oven, all organic. all delicious
          </p>
           
          <ul className="pizzas">
            {/* printing the all lists in one time with the help of the map loop for redering the lists it will work on the arrays very smothly:*/}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </> //fragment tag for as a parent element for jsx
      ) : null}

      {/*Props*/}

      {/* props whole learning is here:*/}
      {/* passing props like this  */}
      {/* <Pizza
        name="Pizza spinaci"
        ingredients="Tomato,mozarella,spaniach,and ricotta cheese"
        photoName="pizzas\spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato,mashrooms"
        photoName="pizzas/funghi.jpg"
        price={20}
      /> */}
    </main>
  );
}

// here we receiving the props:
//Pizza Component:
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if(pizzaObj.soldOut) return <h3>SOLD OUT</h3>
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

//Footer compoenent is here:
function Footer() {
  //Footer component:
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >=openHour && hour <= closeHour) alert ("We're currently open!");
  // else {
  //     alert("Sorry we're closed");
  // }
  // if(!isOpen){
  //   return (
  //     <p>We're happy to wellcome you between{openHour}:00 and {closeHour}</p>
  //   );
  // };
  // if(!isOpen) return <h1>CLOSED</h1>

  return (
    <footer className="footer">
      {!isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to wellcome you between {openHour} :00 and {closeHour}:00
          and {closeHour}
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}.We're currently open!*/}
    </footer>
  );

  // This is used without jsx
  // return React.createElement("footer",null,"We're currently open!");
}


function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00 Come visit us or order
        online.{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//making new components:
// All thingfor rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

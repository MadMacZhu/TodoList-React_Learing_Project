import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ContactCard from './components/ContactCard';
import productData from './components/productData';
import Product from './components/Product';
import Person from './components/Person';
import Login from './components/Login';
//import MainContent from './components/MainContent';
//import Footer from './components/Footer';
import './App.css';

function App() {
  const date = new Date();

  const productComponents = productData.map(item => <Product
                                            key={item.id}
                                            product={item}/>);

  return (
    <div className="App">
      <Navbar />
      <TodoList />
      <p>Now is {date.getHours()}</p>
      <ContactCard 
        name = "Mr. Wiskerson"
        imgUrl = "http://placekitten.com/400/200"
        phone = "(212) 555-1234"
        email = "mr.whiskaz@catnap.meow"
      />
      {productComponents}
      <Person />
      <Login />
      <button onClick={() => console.log("Clicked")}> Click me!
        </button>
    </div>
  );
}

export default App;

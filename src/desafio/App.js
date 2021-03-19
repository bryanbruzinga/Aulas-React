import React from 'react'
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

function App() {

  let Pagina = Home
  const {pathname} = window.location;
  if(pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  return (
    <div className="App">
      <Header />
      <Pagina />
    </div>
  );
}

export default App;

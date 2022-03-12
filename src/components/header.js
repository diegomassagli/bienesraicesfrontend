import React from 'react';
import { Link }  from 'gatsby';
import Navegacion from './navegacion';


const Header = () => {
  return ( 
    
    <header>
      <div>
        <h1>Hola</h1>
        <Link to="/">
          Bienes Raices
        </Link>
        <Navegacion />
      </div>
    </header>
   );
}
 
export default Header;
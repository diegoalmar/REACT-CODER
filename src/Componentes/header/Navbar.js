import React from "react";

const Header = (props) => {
    console.log(props)
    console.log(props.nombre)


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="/hetlog.png" alt="" width="60" height="30"/>
           </a>
           <a className="navbar-brand" href="#">{props.nombre}</a>
           <button className="navbar-toggler" type="button"data-bs-toggle="collapse"
             data-bs-target="#navbarNavDropdown"aria-controls="navbarNavDropdown"aria-expanded="false"aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
           </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quienes Somos </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"href="#"id="navbarDropdownMenuLink"role="button"
                data-bs-toggle="dropdown"aria-expanded="false">Categorias</a>
                <ul className="dropdown-menu"aria-labelledby="navbarDropdownMenuLink">
                <li>
                    <a className="dropdown-item" href="#"> Camisas </a>
                </li>
                <li>
                     <a className="dropdown-item" href="#">Trajes de baño </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">Remeras</a>
                </li>
                <li> 
                    <a className="dropdown-item" href="#">Bermudas </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">Accesorios </a>
                </li>               
                </ul>
            </li>
          </ul>
          {props.links.map((elemento, indice)=>{
        return <a key={indice} href={elemento.href}>{elemento.name}</a>
        })}
        </div>  
      </div>
      
    </nav>
  );
};

export default Header;

import React from 'react';
import {Link } from "react-router-dom";
import './Home.css';    

const Home = () =>{
        
        

        return (
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="card">
                <h1> ¿QUIEN QUIERE SER MILLONARIO? </h1>
                <form>
                <div class="form-group">
                    <label>Usuario</label>
                    <input type="text" class="form-control" id="usuario" aria-describedby="usuario" placeholder="Ingrese nombre"/>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="selectCategory">Categoria</label>
                        <select class="form-control" id="selectCategory">
                            <option value="21">Deporte</option>
                            <option value="27">Animales</option>
                            <option value="25">Arte</option>
                            <option value="20" >Mitologia</option>
                            <option value="22" >Geografia</option>
                        </select>  
                </div>
                <br></br>
                <div class="form-group">
                    <label for="selectCategory">Dificultad</label>
                        <select class="form-control" id="selectCategory">
                            <option value="easy">Facil</option>
                            <option value="medium">Normal</option>
                            <option value="hard">Dificil</option>
                        </select>  
                </div>
                <br></br>
                <Link to={`/Home/Game`}><button type="button" class="btn btn-dark">
                    Ingresar
                    </button>
                </Link>
                <br></br>
                </form> 
                </div>  
            </main>    
        )
      
    
   
};
   
  export default Home;
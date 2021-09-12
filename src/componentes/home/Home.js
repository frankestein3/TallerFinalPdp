import React, { Fragment, useState } from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { useHistory } from "react-router-dom";

const Home = () => {

    const [datos, setDatos] = useState({
        usuario: '',
        categoria: '',
        dificultad: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value

        })
    }
    
    const enviarDatos = (event) => {
        event.preventDefault();
        let user = datos.usuario
        let category = datos.categoria
        let difficult = datos.dificultad
        /*console.log(datos.usuario);
        console.log(datos.categoria);
        console.log(datos.dificultad);*/
        history.push(`/Home/Game/${user}/${category}/${difficult}`);
    }

    let history = useHistory();

    return (
        <Fragment>
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="card">
                    <h1> ¿QUIÉN QUIERE SER MILLONARIO? </h1>
                    <form onSubmit={enviarDatos}>
                        <div class="form-group">
                            <br />
                            <br />
                            <label>Usuario</label>
                            <input type="text" name="usuario" class="form-control" id="usuario" placeholder="Ingrese nombre"
                                onChange={handleInputChange} required
                            />
                        </div>
                        <br></br>
                        <div class="form-group">
                            <label for="selectCategory">Categoría</label>
                            <select class="form-control" id="categoria" name="categoria" onChange={handleInputChange} required>
                                <option value="">Seleccionar Categoría</option>
                                <option value="21">Deporte</option>
                                <option value="27">Animales</option>
                                <option value="25">Arte</option>
                                <option value="20" >Mitología</option>
                                <option value="22" >Geografía</option>
                            </select>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <label for="selectCategory">Dificultad</label>
                            <select class="form-control" id="dificultad" name="dificultad" onChange={handleInputChange} required>
                                <option value="">Seleccionar Dificultad</option>
                                <option value="easy">Facil</option>
                                <option value="medium">Normal</option>
                                <option value="hard">Dificil</option>
                            </select>
                        </div>
                        <br></br><br />
                        <button type="submit" class="btn btn-dark">
                            Ingresar
                        </button>

                        <br></br>
                    </form>
                </div>
            </main>
            <br />
            <footer>
                <div className="container">
                    <h5>Desarrollado por:</h5>
                    <br />
                    <h5>Juan Pablo Hincapie Cardenas</h5>
                    <h5>Valentina Hernandez Arroyave</h5>
                </div>

            </footer>
        </Fragment>
    )
};

export default Home;
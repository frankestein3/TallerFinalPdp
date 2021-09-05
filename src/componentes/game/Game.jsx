import React from 'react';
import { useParams } from 'react-router';
import './game.css';  

const Game = () =>{
 
        const [preguntas, setPreguntas] = React.useState(null)

        React.useEffect(()=> {
            fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`)
            .then( res => res.json())
            .then ( data => {
                console.log(data.results)
                setPreguntas(data.results)
                //console.log(preguntas[0].question)
            })
                
                  
            
        },[])

        const {user} = useParams();
        const {category} = useParams();
        const {difficult} = useParams();

        
   
        return (
           
            <div>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="header"> 
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link">{user}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" >Nivel: {difficult}</a>
                            </li>
                            <li class="nav-item " >
                                <a class="nav-link">Ganacia: 0</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <div className="card">
                    <br></br>
                    <button class="counter">30</button>
                    <br></br>
                    <p>question</p>
                    <br></br>
                    <button class="btn btn-dark btn-lg btn-block optionsbtn">Clark Kent</button>
                    <br></br>
                    <button class="btn btn-dark btn-lg btn-block optionsbtn">Bruce Wayna</button>
                    <br></br>
                    <button class="btn btn-dark btn-lg btn-block optionsbtn">Tony Stark</button>
                    <br></br>
                    <button class="btn btn-dark btn-lg btn-block optionsbtn">Bruno Diaz</button>
                </div>
                <div className="card winning">
                    <p>1 $1,000</p>
                    <p>2 $2,000</p>
                    <p>3 $3,000</p>
                    <p>4 $4,000</p>
                    <p>5 $5,000</p>
                    <p>6 $6,000</p>
                    <p>7 $7,000</p>
                    <p>8 $8,000</p>
                    <p>9 $9,000</p>
                    <p>10 $10,000</p>
                </div>
            </div>
            
        )
      
    
   
  }
   
  export default Game;
import { React, useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import "./game.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Game = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0)
  const [ganancia, setGanancia] = useState(0)
  const [modal, setModal] = useState(false)
  const [modalClose, setModalClose] = useState(false)
  const [num, setNum] = useState(30)

  let intervalRef = useRef();

  const { user } = useParams();
  const { category } = useParams();
  const { difficult } = useParams();

  const decreaseNum = () => {
      setNum((prev) => prev - 1);
      
  };
 

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPreguntas(data.results);
      });
  }, []);

  useEffect(() => {
    console.log(num);
    if (num === 30) {
      intervalRef.current = setInterval(decreaseNum, 1000);
    } else if (num === 0) {
      setModalClose(true)
    }
  }, [num])
 

  const handleClose = () => setModal(false);
  const handleModalClose = () => setModalClose(false);
  const fail = () => setModalClose(true);

  const cambios = () => {
    clearInterval(intervalRef.current);
    setNum(30);
    setIndice(indice + 1);
    setGanancia(ganancia + 1000);
    if (indice == 9) {
      setModal(true);
    }
  };
  const logOut = () => {

    histo.goBack();
  };

  let histo = useHistory();
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="header">
        <div class="container nav-item">
            <div class="row">
              <div class="col">
              <a class="nav-link">{user}</a>
              </div>
              <div class="col">
              <a class="nav-link">Nivel: {difficult}</a>
              </div>
              <div class="col">
                <a class="nav-link">Ganacia: {ganancia}</a>
              </div>
              <div class="col navy"  onClick={logOut}>
                <a class="nav-link">Salir</a> 
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br></br>
      <div className="card_game">
        <br></br>
        <button class="counter">{(num >= 0) ? num : 0}</button>
        <br></br><br/>
          <p>{preguntas[indice] ? preguntas[indice].question : ""}</p>
          <br></br>
          <div class="container optionsButton">
            <button class="btn btn-dark btn-lg btn-block optionsbtn" onClick={cambios}>
              {preguntas[indice] ? preguntas[indice].correct_answer : ""}
            </button>
            <br></br><br />
            <button class="btn btn-dark btn-lg btn-block optionsbtn" onClick={fail}>
              {preguntas[indice] ? preguntas[indice].incorrect_answers[0] : ""}
            </button>
            <br></br><br />
            <button class="btn btn-dark btn-lg btn-block optionsbtn" onClick={fail}>
              {preguntas[indice] ? preguntas[indice].incorrect_answers[1] : ""}
            </button>
            <br></br><br />
            <button class="btn btn-dark btn-lg btn-block optionsbtn" onClick={fail}>
              {preguntas[indice] ? preguntas[indice].incorrect_answers[2] : ""}
            </button>
          </div>
      </div>
      <div className="card_winning">
        <p>10. $10,000</p>
        <p>9. $9,000</p>
        <p>8. $8,000</p>
        <p>7. $7,000</p>
        <p>6. $6,000</p>
        <p>5. $5,000</p>
        <p>4. $4,000</p>
        <p>3. $3,000</p>
        <p>2. $2,000</p>
        <p>1. $1,000</p>
      </div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡GANASTE!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={(() => window.location = "/")}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={modalClose} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡PERDISTE!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={(() => window.location = "/")}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Game;
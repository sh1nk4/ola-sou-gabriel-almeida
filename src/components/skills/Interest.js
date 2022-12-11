import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>Oque eu faço?</span>
          <h2 className={classes.heading}>AQUI ESTÃO ALGUNS DOS MEUS CONHECIMENTOS</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>FRONT END</h3>
                <p>Vanilla JS e React. Criando páginas responsivas e agradáveis aos público. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>BACKEND</h3>
                <p>Criar APIs resistentes e de fácil manutenção em Node, sempre com segurança!</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>AUTOMAÇÕES</h3>
                <p>Tenho um grande interesse em automações Python e tenho estudado conceitos com as bibliotecas nativas(ex: autogui)</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;
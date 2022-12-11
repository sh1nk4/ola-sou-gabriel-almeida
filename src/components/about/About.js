import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>SOBRE MIM</span>
                    <h2 className={classes.heading}>QUEM SOU EU?</h2>
                    <div className={classes.About}>
                        <p> Meu nome é <b>Gabriel Almeida</b> e eu sou um desenvolvedor Junior em JS e em breve Python, este é o meu <a target="_blank" href="https://www.springworks.in/"><b>GitHub</b></a> onde o código deste portfolio também pode ser encontrado. Completei o curso da c0d3.com, muito conhecido nos EUA e estou procurando uma oportunidade na área para atuar com problemas reais do dia a dia das empresas :)  </p>
                        <p className={classes.br}>Estou sempre estudando tecnologias novas e testando novos algorítmos e formas mais curtas de se resolver um mesmo problema.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;
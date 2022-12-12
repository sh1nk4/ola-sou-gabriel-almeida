import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experiência  <span>Ago(2021)-Atual</span></h2>
                                                    <p>Projetos pessoais e aperfeiçoamento da lógica de programação.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Análise e Desenvolvimento de Sistemas na <b>Estácio</b> <span>2022-2024</span></h2>
                                                    <p>Aprendendo conceitos da programação desde os fundamentos, passando por tecnologias antigas e novas.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Desenvolvimento Avançado em Javascript na <b>c0d3</b> <span>2021-2022</span></h2>
                                                    <p>Aprendendo conceitos avançados de JS que são utilizados atualmente baseado nos últimos módulos lançados(ES6+).</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;

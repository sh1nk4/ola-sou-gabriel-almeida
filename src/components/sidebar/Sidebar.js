import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/gabriel.png'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # programar </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # desafios </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # facilitar </div>
                <h1><Link smooth to="/#start" className="h1_links">Gabriel Almeida</Link></h1>

                <img src={logo} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> gabrielalmeida45898@gmail.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">Sobre</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Educação</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interesses</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://web.whatsapp.com/send?phone=5511985517046&text=Olá Gabriel, tudo bem? Estava olhando seu portfolio e gostaria de conversar melhor com você." rel="opener noreferrer" target="_blank" className="fa fas fa-whatsapp fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:gabrielalmeida45898@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/sh1nk4" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/gabriel-almeida-c0d3r/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar

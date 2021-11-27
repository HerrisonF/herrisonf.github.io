import noPhoto from '../no-photo.jpg';
import lol_1 from '../leagueOfLegends/lol_1.png';
import lol_2 from '../leagueOfLegends/lol_2.png';
import lol_3 from '../leagueOfLegends/lol_3.png';
import lol_4 from '../leagueOfLegends/lol_4.png';
import inicioTcc from '../tcc/inicio-tcc.png';
import listagemTcc from '../tcc/listagem-tcc.png';
import passwordTcc from '../tcc/password-tcc.png';
import perguntaTcc from '../tcc/pergunta-tcc.png';
import projOi from '../proje-oi/oi_1.png';
import projOi2 from '../proje-oi/oi_2.png';
import meuTecnico from '../meu-tecnico/meu_tecnico.png';
import claro1 from '../claro-lgpd/claro_1.png';
import claro2 from '../claro-lgpd/claro_2.png';
import cip1 from '../cip/cip_1.png';
import cip2 from '../cip/cip_2.png';
import mambo1 from '../mambo/mambo_1.png';
import mambo2 from '../mambo/mambo_2.jpeg';

import { Card } from 'react-bootstrap';
import React from 'react';

import './style.scss';

const SwitchImage = ({ id, type }) => {
    switch (id) {
        case 1:
            return (
                    type ?
                    <Card.Img variant="top" src={lol_1} className="portifolio-slide"/> : 
                    <div>
                        <img
                        className="d-block w-100"
                        src={lol_1}
                        alt="First slide"
                        />
                        <span className="format-text-under-images">Watch Summoner</span>
                    </div>
                    
            )
        case 2: 
            return (
                type ?
                <Card.Img variant="top" src={lol_2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lol_2}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
        case 3: 
            return (
                type ?
                <Card.Img variant="top" src={lol_3} className="portifolio-slide"/> :
                <div>
                    <img
                    className="d-block w-100"
                    src={lol_3}
                    alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
        case 4: 
            return (
                type ?
                <Card.Img variant="top" src={lol_4} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lol_4}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
            case 10: 
            return (
                type ?
                <Card.Img variant="top" src={inicioTcc} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={inicioTcc}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Estude Melhor</span>
                </div>
            )
            case 11: 
            return (
                type ?
                <Card.Img variant="top" src={listagemTcc} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={listagemTcc}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Estude Melhor</span>
                </div>
            )
            case 12: 
            return (
                type ?
                <Card.Img variant="top" src={passwordTcc} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={passwordTcc}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Estude Melhor</span>
                </div>
            )
            case 13: 
            return (
                type ?
                <Card.Img variant="top" src={perguntaTcc} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={perguntaTcc}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Estude Melhor</span>
                </div>
            )
            case 14: 
            return (
                type ?
                <Card.Img variant="top" src={meuTecnico} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={meuTecnico}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">APP Meu Técnico</span>
                </div>
            )
            case 15: 
            return (
                type ?
                <Card.Img variant="top" src={cip1} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={cip1}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Projeto CIP</span>
                </div>
            )
            case 16: 
            return (
                type ?
                <Card.Img variant="top" src={cip2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={cip2}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Projeto CIP</span>
                </div>
            )
            case 17: 
            return (
                type ?
                <Card.Img variant="top" src={claro1} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={claro1}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Claro LGPD</span>
                </div>
            )
            case 18: 
            return (
                type ?
                <Card.Img variant="top" src={claro2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={claro2}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Claro LGPD</span>
                </div>
            )
            case 19: 
            return (
                type ?
                <Card.Img variant="top" src={projOi} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={projOi}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Regionalizador OI</span>
                </div>
            )
            case 20: 
            return (
                type ?
                <Card.Img variant="top" src={projOi2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={projOi2}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Regionalizador OI</span>
                </div>
            )
            case 21: 
            return (
                type ?
                <Card.Img variant="top" src={mambo1} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={mambo1}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Mambo Delivery</span>
                </div>
            )
            case 22: 
            return (
                type ?
                <Card.Img variant="top" src={mambo2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={mambo2}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Mambo Delivery</span>
                </div>
            )
        default: 
            return(
                type ?
                <Card.Img variant="top" src={noPhoto} className="portifolio-slide"/> : <img
                    className="d-block w-100"
                    src={noPhoto}
                    alt="First slide"
                    /> 
            )
    }
}

export default SwitchImage;
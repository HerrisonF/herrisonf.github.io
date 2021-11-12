import noPhoto from '../no-photo.jpg';
import lolDetalhesChamp from '../leagueOfLegends/lol-detalhes-champ.jpeg';
import lolDetalhes2 from '../leagueOfLegends/lol-detalhes-2.jpeg';
import lolListagemChamps from '../leagueOfLegends/lol-listagem-champs.jpeg';
import lolListagemItens from '../leagueOfLegends/lol-listagem-itens.jpeg';
import lolListagemJogadores from '../leagueOfLegends/lol-listagem-jogadores.jpeg';
import lolListagemRunas from '../leagueOfLegends/lol-listagem-runas.jpeg';
import lolProfile from '../leagueOfLegends/lol-profile.jpeg';
import lolRunningGame from '../leagueOfLegends/lol-running-game.jpeg';
import lolRunningGame2 from '../leagueOfLegends/lol-running-game-2.jpeg';
import inicioTcc from '../tcc/inicio-tcc.png';
import listagemTcc from '../tcc/listagem-tcc.png';
import passwordTcc from '../tcc/password-tcc.png';
import perguntaTcc from '../tcc/pergunta-tcc.png';
import projOi from '../proje-oi/oi-1.png';
import projOi2 from '../proje-oi/oi-2.png';
import meuTecnico from '../meu-tecnico/meu-tecnico.png';
import claro1 from '../claro-lgpd/claro-1.png';
import claro2 from '../claro-lgpd/claro-2.png';
import cip1 from '../cip/cip-1.png';
import cip2 from '../cip/cip-2.png';
import mambo from '../mambo/mambo-1.png';

import { Card } from 'react-bootstrap';
import React from 'react';

import './style.scss';

const SwitchImage = ({ id, type }) => {
    switch (id) {
        case 1:
            return (
                    type ?
                    <Card.Img variant="top" src={lolDetalhesChamp} className="portifolio-slide"/> : 
                    <div>
                        <img
                        className="d-block w-100"
                        src={lolDetalhesChamp}
                        alt="First slide"
                        />
                        <span className="format-text-under-images">Watch Summoner</span>
                    </div>
                    
            )
        case 2: 
            return (
                type ?
                <Card.Img variant="top" src={lolDetalhes2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lolDetalhes2}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
        case 3: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemChamps} className="portifolio-slide"/> :
                <div>
                    <img
                    className="d-block w-100"
                    src={lolListagemChamps}
                    alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
        case 4: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemItens} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lolListagemItens}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
            case 5: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemJogadores} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lolListagemJogadores}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
            case 6: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemRunas} className="portifolio-slide"/> :
                <div>
                    <img
                    className="d-block w-100"
                    src={lolListagemRunas}
                    alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
            case 7: 
            return (
                type ?
                <Card.Img variant="top" src={lolProfile} className="portifolio-slide"/> :
                <div>
                    <img
                    className="d-block w-100"
                    src={lolProfile}
                    alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
            case 8: 
            return (
                type ?
                <Card.Img variant="top" src={lolRunningGame} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lolRunningGame}
                        alt="First slide"
                    />
                    <span className="format-text-under-images">Watch Summoner</span>
                </div>
            )
            case 9: 
            return (
                type ?
                <Card.Img variant="top" src={lolRunningGame2} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={lolRunningGame2}
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
                <Card.Img variant="top" src={mambo} className="portifolio-slide"/> :
                <div>
                    <img
                        className="d-block w-100"
                        src={mambo}
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
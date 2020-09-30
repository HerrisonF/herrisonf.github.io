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

import { Card } from 'react-bootstrap';
import React from 'react';

import './style.scss';

const SwitchImage = ({ id, type }) => {
    switch (id) {
        case 1:
            return (
                    type ?
                    <Card.Img variant="top" src={lolDetalhesChamp} className="portifolio-slide"/> : 
                    <img
                    className="d-block w-100"
                    src={lolDetalhesChamp}
                    alt="First slide"
                    />
                    
            )
        case 2: 
            return (
                type ?
                <Card.Img variant="top" src={lolDetalhes2} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolDetalhes2}
                        alt="First slide"
                        />
            )
        case 3: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemChamps} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolListagemChamps}
                        alt="First slide"
                        />
            )
        case 4: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemItens} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolListagemItens}
                        alt="First slide"
                        />
            )
            case 5: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemJogadores} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolListagemJogadores}
                        alt="First slide"
                        />
            )
            case 6: 
            return (
                type ?
                <Card.Img variant="top" src={lolListagemRunas} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolListagemRunas}
                        alt="First slide"
                        />
            )
            case 7: 
            return (
                type ?
                <Card.Img variant="top" src={lolProfile} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolProfile}
                        alt="First slide"
                        />
            )
            case 8: 
            return (
                type ?
                <Card.Img variant="top" src={lolRunningGame} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolRunningGame}
                        alt="First slide"
                        />
            )
            case 9: 
            return (
                type ?
                <Card.Img variant="top" src={lolRunningGame2} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={lolRunningGame2}
                        alt="First slide"
                        />
            )
            case 10: 
            return (
                type ?
                <Card.Img variant="top" src={inicioTcc} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={inicioTcc}
                        alt="First slide"
                        />
            )
            case 11: 
            return (
                type ?
                <Card.Img variant="top" src={listagemTcc} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={listagemTcc}
                        alt="First slide"
                        />
            )
            case 12: 
            return (
                type ?
                <Card.Img variant="top" src={passwordTcc} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={passwordTcc}
                        alt="First slide"
                        />
            )
            case 13: 
            return (
                type ?
                <Card.Img variant="top" src={perguntaTcc} className="portifolio-slide"/> :
                    <img
                        className="d-block w-100"
                        src={perguntaTcc}
                        alt="First slide"
                        />
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
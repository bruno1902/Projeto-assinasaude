import React from 'react';
import { BsStopwatch } from 'react-icons/bs';

import './Prontuario-preenchido.css';

const Preenchido = () => {
    return(
    <div className="preenchido">
        <p className="date">24 ago 2020</p>
        <section className="wrapper-preenchido">
            <div className="watch">
                <BsStopwatch />
                <h1>18:41</h1>
            </div>
            <p className="anamnese-preenchido">Anamnese</p>
            <div className="main-preenchida">
            <p className="queixa-principal">Queixa Principal</p>
            <div className="queixa-principal-value">Vomito</div>
            <div className="doencas-adulto">Doenças Adulto</div>
            <div className="doenca-wrapper-preenchida">
                <p>Doença1 X</p>
                <p>Doença2 X</p>
                <p>Doença2 X</p>
            </div>
            <p className="history-illness-preenchido">Historico da Moléstia</p>
            <p className="history-illness-text">Fortes dores de cabeça</p>
            </div>
        </section>
        <a className="button-add" href="/blank">Adicionar novo prontuário</a>
    </div>
    )
};

export default Preenchido;
import React from 'react';

import './Cadastro.css';
import '../../api';

const Cadastro = () => {
    return(
        <div className="cadastro">
            <p className="anamnese">Anamnese</p>
            <section className="wrapper-cadastro">
                <p className="form-1">Queixa Principal</p>
                <select className="option-1">
                    <option className="teste" value="1">Selecione</option>
                </select>

                <p className="form-2">Doenças Adulto</p>
                <select className="option-1">
                    <option className="teste" value="2">Selecione</option>
                </select>

                <p className="selected-text">Selecionados:</p>

                <div className="doenca-wrapper">
                    <p>Doença1 X</p>
                    <p>Doença2 X</p>
                </div>

                <p className="history-illness">Historico da Moléstia</p>

                <textarea className="text-area" placeholder="Digite..."></textarea>

                <button className="button-save" type="submit">Salvar</button>
            </section>
        </div>
    )
};

export default Cadastro;
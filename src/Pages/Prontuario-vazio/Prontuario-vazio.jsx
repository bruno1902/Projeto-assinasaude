import React from 'react';

import './Prontuario-vazio.css';

const Vazio = () => {
    return(
        <div className="prontuario-vazio">
            <h1>Nenhum prontuário cadastrado.</h1>
            <a className="prontuario-vazio-botao" href="Cadastro">Adicionar novo prontuário</a>
        </div>
    )
};

export default Vazio;
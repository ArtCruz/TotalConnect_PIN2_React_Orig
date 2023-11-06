import React from 'react';

function QuadroPlantao({ quadroPlantao }) {
  return (
    <div className="box-quadro-plantao">
      <div className="d-flex justify-content-between align-items-end">
        <div className="box-mensagem d-flex justify-content-between align-items-end">
          <div className="box-mensagem">
            <p /* <span>{quadroPlantao.funcionario.nome}</span> */>
              Editado por: 
            </p>
            <textarea
              name="quadroPlantao"
              id="quadroPlantao"/* value={quadroPlantao.mensagem} */              
              placeholder="Deixe aqui um Aviso"
              readOnly
            ></textarea>
          </div>
          <div className="btn-atualizar-plantao" /* ${quadroPlantao.id}} */>
            <a
              id="btn_up-quadroPlantao"
              className="btn btn-primary ml-2"
            >
              Atualizar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuadroPlantao;

import React from 'react';

function QuadroAvisos({ quadroAvisos }) {
  return (
    <div className="box-quadro_avisos">
      <div className="d-flex justify-content-between align-items-end">
        <div className="box-mensagem-avisos">
          <p /*<span>{quadroAvisos.funcionario.nome}</span>*/>
            Editado por: 
          </p>
          <textarea
            name="quadroAvisos"
            id="quadroAvisos"
            /*value={quadroAvisos.mensagem}*/
            placeholder="Deixe aqui um Aviso"
            readOnly
          ></textarea>
        </div>
        <a
          /*href={`/home/edit/quadroAvisos/${quadroAvisos.id}`}*/
          id="btn_up-quadroAvisos"
          className="btn btn-primary"
        >
          Atualizar
        </a>
      </div>
    </div>
  );
}

export default QuadroAvisos;

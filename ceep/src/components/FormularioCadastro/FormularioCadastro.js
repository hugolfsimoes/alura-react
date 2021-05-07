import React from 'react';

class FormularioCadastro extends React.Component {
  render(){
    return(
      <form>
        <input type="text" placeholder="Título" className="form-cadastro_input"/>
        <textarea rows="15" placeholder="Escreva sua nota..." className="form-cadastro_input"/>
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button >
      </form>

    );
  }
}

export default FormularioCadastro;
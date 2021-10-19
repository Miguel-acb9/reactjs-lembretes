// Importação de módulos e bibliotecas
import "./FormularioCadastro.css";
import React, { Component } from "react";

class FormularioCadastro extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
        
    }

    render() {
        return (
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
            <h3>+ Adicionar Lembrete</h3>
            <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={this._handleMudancaTitulo.bind(this)}
            />
            <textarea
                rows={20}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={this._handleMudancaTexto.bind(this)}
            />
            <button className="form-cadastro_input form-cadastro_submit">Criar</button>
        </form>
        );
    }
}

export default FormularioCadastro;
// Importação de módulos e bibliotecas
import "./Assets/App.css";
import "./Assets/index.css";
import React, { Component } from "react";
import ListaNotas from "./Components/ListaNotas";
import FormularioCadastro from "./Components/FormularioCadastro";

class App extends Component {
    constructor() {
        super();
        this.state = { notas:[] };
    }

    criarNota(titulo, texto){
        const novaNota = { titulo, texto };
        const novoArrayNotas = [...this.state.notas,novaNota];
        const novoEstado = { notas:novoArrayNotas };
        this.setState(novoEstado);
    }

    render() {
        return (
        <section className="conteudo">
            <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
            <ListaNotas notas={this.state.notas}/>
        </section>
        );
    }
}

export default App;

// Importação de módulos e bibliotecas
import "./ListaNotas.css";
import CardNota from "../CardNota";
import React, { Component } from "react";

class ListaNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaNotas;

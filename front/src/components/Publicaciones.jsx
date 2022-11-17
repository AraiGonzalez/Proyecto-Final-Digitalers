import React from "react";
import { Component} from "react";
import "../resources/css/publicacion.css";

export default class Publicaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
    };
  }

  render() {
    return (
        <section class="alinear">
          <h6>{this.state.title}</h6>
          <table>
            <td>{this.state.body}</td>
          </table>
          <button type="button" class="btn btn-primary boton " >
            Agregar
          </button>
          <button type="button" class="btn btn-info boton ">
            Editar
          </button>
          <button type="button" class="btn btn-danger boton ">
            eliminar
          </button>
        </section>
    );
  }
}

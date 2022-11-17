import React from 'react';
import { Component } from 'react';
import "../resources/css/publicacion.css";

export default class PublicacionDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body
        }
    }


    deletePublication = (event) => {


        const url = "http://localhost:8080/publications/delete";
        const publicaciones = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        }
        const header = {
            method: "DELETE",
            body: JSON.stringify(publicaciones),
            headers: {
                "Content-Type": "application/json",
                "credential": localStorage.getItem("uuid")
            }
        }

        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            }
            )
            .then(json => {
                console.log(json);
                window.location.href = "/publicaciondelete";
            })
            .catch(error => {
                console.error(error);
                alert("Credenciales incorrectas");
            });
    }

    render() {
        return (
            <>
            <section>
               <h6>{this.state.title}</h6>
              <table>
               <td>{this.state.body}</td>
              </table>
                    <a className="btn btn-outline-secondary rounded-0" onClick={this.deletePublication}>
                        Borrar Publicacion
                    </a>
            </section>
            </>
        );
    }
}
import React from "react";
import { Component } from "react";
import Publicaciones from "./Publicaciones";
import Login from "./Login";
import '../resources/css/publicacion.css'
export default class PublicacionBuscar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publicaciones: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll = (event) => {
        const url = "http://localhost:8080/publications/findAll";
        const header = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            }
            )
            .then(json => this.setState({ publicaciones: json }))
            .catch(error => {
                console.error(error);
                alert("No se encontraron publicaciones");
            })
            .finally(() => console.info(this.state.publicaciones));
    }

    render() {
            return (
                <section class="alinear" >
                    {
                        this.state.publicaciones.map(
                            elem => (
                                <Publicaciones
                                    id={elem.id}
                                    title={elem.title}
                                    body={elem.body}
                                />
                            )

                        )
                    }
                </section>
            )
    }
}
import React from "react";
import { Component } from "react";
import '../resources/css/publicacion.css'
import PublicacionDelete from './PublicacionDelete';
export default class PublicacionBuscarporId extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publicaciones: []
        }
    }

    componentDidMount() {
        this.getByUser();
    }
    getByUser = (event) => {
        var uuid = localStorage.getItem("uuid");
        const url = "http://localhost:8080/publications/findByUserId/" + uuid;
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
            })
            .finally(() => console.info(this.state.publicaciones));
    }
    render(){
        return(
            <section class="alinear" >
            {
                this.state.publicaciones.map(
                    elem => (
                        <PublicacionDelete
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


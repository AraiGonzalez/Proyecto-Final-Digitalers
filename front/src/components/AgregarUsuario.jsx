import React from "react";
import { Component } from "react";

export default class AgregaUsuario extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            key: ""
        }
    }


    setValues = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    cleanValues = () => {
        this.setState(
            {
                email: "",
                key: ""
            }
        );
    }

    add=(event) =>{

        const url = "http://localhost:8080/users/insert";
        const user = {
            email: this.state.email,
            key: this.state.key,
            active: true
        }

        const header = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                console.log(response);
                return response.json();
            })
            .then(json => {
                console.log(json);
                window.location.href="/";
            })
            .catch(error => {
                console.error(error);
                localStorage.clear();
                alert("No se pudo registrar al usuario");
                
            });
        this.cleanValues();
    }

    render() {
        return (
            <div className="">
                { localStorage.length==0 &&
                <form onSubmit={this.add} >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="correo electronico"
                        required={true}
                        value={this.state.email}
                        onChange={this.setValues}

                    />

                    <input
                        type="password"
                        id="key"
                        name="key"
                        placeholder="clave"
                        required={true}
                        value={this.state.key}
                        onChange={this.setValues}
                    />
                    
                    <div>
                        <button type="submit" class="btn btn-outline-primary">Crear</button>
                        <button type="reset" class="btn btn-outline-secondary" onClick={this.cleanValues}>Limpiar</button>
                    </div>
                </form>}
            </div>
        );
    }


}
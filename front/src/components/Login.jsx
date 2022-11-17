import React from "react";
import { Component } from "react";
import "../resources/css/login.css";



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            key: ""
        }
    }

    setValues = (event) => {
        this.setState({
            [event.target.id]: event.target.value
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

    signIn = (event) => {
        event.preventDefault();

        const url = "http://localhost:8080/login/signIn";
        const user = {
            email: this.state.email,
            key: this.state.key
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
                return response.json();
            }
            )
            .then(json => {
                console.log(json);
                localStorage.uuid = json.uuid;
                localStorage.credential = json.credential;
                window.location.href="/";
            })
            .catch(error => {
                console.error(error);
                localStorage.clear();
                alert("Credenciales Incorrectas");
            });
        this.cleanValues();
    }




    render() {
        return (
            <div className="columna">
            <form onSubmit={this.signIn} >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label label">Usuario</label>
              <input class="form-control input" aria-describedby="emailHelp"   type="email"
                        id="email"
                        name="email"
                        placeholder="correo electronico"
                        required={true}
                        value={this.state.email}
                        onChange={this.setValues}></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label label">Contraseña</label>
              <input  class="form-control input"  type="password"
                        id="key"
                        name="key"
                        placeholder="clave"
                        required={true}
                        value={this.state.key}
                        onChange={this.setValues}></input>
            </div >
         <div class="botones">
            <button type="submit" class="btn btn-primary btn-sm boton">  Ingresar</button>
                    <button type="reset" onClick={this.cleanValues} class="btn btn-primary btn-sm boton">Limpiar</button>  
                    </div>
                            </form>
        
                </div>
        );
    }
}
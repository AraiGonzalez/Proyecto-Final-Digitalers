import React from "react";
import { Component } from "react";


export default class AgregarPublicacion extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
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
                title: "",
                body: ""
            }
        );
    }

    add = () => {
        const url = "http://localhost:8080/publications/insert";
        const publicaciones = {
            title: this.state.title,
            body: this.state.body
        }
        const header = {
            method: "POST",
            body: JSON.stringify(publicaciones),
            headers: {
                "Content-Type": "application/json",
                "credential": localStorage.getItem("uuid"),
            }
        }
        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                console.log(response);
                window.location.href = "/publicaciondelete";
                return response.json();
            })
            .then(json => {
                console.log(json)
                window.location.href = "/publicaciondelete";
            })
            .catch(error => {
                console.error(error);
                alert("No se pudo crear la publicacion");
            })
        this.cleanValues();
    }
    
    render() {
        return (
            <>
                <form role="form" onSubmit={this.add}>
                    <br styles="clear:both" />
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" required value={this.state.title} onChange={this.setValues} />
                    </div>

                    <div className="form-group">
                        <textarea className="form-control" type="textarea" id="body" placeholder="Subject" maxlength="140" rows="7" value={this.state.body} onChange={this.setValues}></textarea>
                    </div>
                    <button type="submit" id="submit" name="submit" className="formButton" class="btn btn-outline-secondary">Add Publication</button>
                </form>
            </>
        )
    }
}
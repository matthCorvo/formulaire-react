import React, { Component } from 'react'
export default class Forminputs extends Component {

state= {
    nom:'',
    age: '',
    ville: '',
    items:[]
}

onChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    });
    // console.log(this.state.nom)
}

onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        nom:'',
        age: '',
        ville: '',
        items:[...this.state.items, {nom:this.state.nom,
        age: this.state.age,
        ville: this.state.ville }]
    });
}

renderCard = () => {
    return this.state.items.map((item,  index) => {

                return (
            <div className="card" key={index}>
                    <div className="card-body">
                        <h2>{item.nom}</h2>
                        <hr />
                        <p>tu a {item.age} ans,</p>
                        <p>tu vis a {item.ville}.</p>
                    </div>
            </div>
        )
                 } )

}
    render() {
        return (
            <div >
                <h1>Formulaires</h1>
                <div className="card my-3">
                    <div className="card-header">Ajouter une personne </div>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit} >

                        <div className="form-group">     
                        <label className="form-label" htmlFor='nom'>Nom</label>
                        <input type="text" className="form-control form-control-lg"
                        name="nom"
                        onChange={this.onChange}
                        value={this.state.nom}
                        />
                        </div>

                        <div className="form-group  py-3">     
                        <label className="form-label" htmlFor='age'>Age</label>
                        <input type="text" className="form-control form-control-lg"
                        name="age"
                        onChange={this.onChange}
                        value={this.state.age}
                        />
                        </div>

                        <div className="form-group mb-3">     
                        <label  className="form-label" htmlFor='ville'>Ville</label>
                        <input type="text" className="form-control form-control-lg"
                        name="ville"
                        onChange={this.onChange}
                        value={this.state.ville}
                        />
                        </div>

                        <button className="btn btn-primary btn-block" type="submit">Créez votre Fiche !</button>

                        </form>
                    </div>
                </div>
                {this.renderCard()}
            </div>
        )
    }
}

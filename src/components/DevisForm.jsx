import React, {Component} from "react";

class DevisForm extends Component {
    state = {
        id: '',
        titre: '',
        prenomClient: '',
        nomClient: '',
        items: {}
    }
    addItem = () => {
        const id = Date.now().toString();
        const items = {...this.state.items};
        console.log(this, items);
        items[id] = {
            id: id,
            description: 'description',
            quantite: 4,
            taxe: 0.8,
            amount: 0
        };
        this.setState({ items: items});
    }
    handleSubmit = evt => {
        evt.preventDefault();
        console.log('devis généré')
    }
    handleChange = (evt, name) => {
        const value = evt.currentTarget.value;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Nouveau devis</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.id} onChange={evt => this.handleChange(evt, 'id')} type="text" name="id" id="titre-devis" placeholder="identifiant client" /><br/>
                        <input value={this.state.titre} onChange={evt => this.handleChange(evt, 'titre')} type="text" name="titre-devis" id="titre-devis" placeholder="titre du devis" /><br/>
                        <input value={this.state.prenomClient} onChange={evt => this.handleChange(evt, 'prenomClient')} type="text" name="prenomClient" id="prenomClient" placeholder="prenom du client" /><br/>
                        <input value={this.state.nomClient} onChange={evt => this.handleChange(evt, 'nomClient')} type="text" name="nomClient" id="nomClient" placeholder="nom du client" /><br/>
                        <button onClick={this.addItem}>Ajouter une ligne</button>
                        <button type="submit">Générer le devis</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default DevisForm;

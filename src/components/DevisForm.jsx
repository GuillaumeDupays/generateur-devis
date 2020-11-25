import React, {Component} from "react";
import Item from "./item";
import {renderPDFInDOM} from "./pdfMaker";
import InputText from "./inputText";

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
        console.log(this, this.state.items);
        items[id] = {
            id: id,
            description: '',
            quantite: 1,
            taxe: 5.5,
            amount: 0
        };
        this.setState({ items: items});
    }
    handleItemChange = (evt, item, field) => {
        console.log(evt.currentTarget.value);
        const value = evt.currentTarget.value;
        const clonedItem = {...item};
        clonedItem[field] = value;
        const cloneItems = {...this.state.items};
        cloneItems[clonedItem.id] = clonedItem;
        this.setState({
            items: cloneItems
        });
    };
    handleSubmit = evt => {
        evt.preventDefault();
        console.log('devis généré')
    }
    handleChange = (evt, name) => {
        const value = evt.currentTarget.value;
        this.setState({[name]: value});
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Nouveau devis</h2>
                    <form onSubmit={this.handleSubmit}>
                        <InputText
                            label="ID"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                        />
                        <InputText
                            label="titre"
                            name="titre"
                            value={this.state.titre}
                            onChange={this.handleChange}
                        />
                        <InputText
                            label="prenomClient"
                            name="prenomClient"
                            value={this.state.prenomClient}
                            onChange={this.handleChange}
                        />
                        <InputText
                            label="nomClient"
                            name="nomClient"
                            value={this.state.nomClient}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.addItem}>Ajouter une ligne</button>

                        {Object.keys(this.state.items).map((itemId, index) => (
                            <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange}/>
                            ))}
                        <button onClick={() => renderPDFInDOM(this.state)}>Générer le devis</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default DevisForm;

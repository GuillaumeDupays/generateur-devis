
import './App.css';
import Info from "./components/info";
import React, {Component} from "react";
import DevisForm from "./components/DevisForm";

class App extends Component {
    state = {
        showForm : true
    };

    showDevisForm = evt => {
        console.log(evt);
       this.setState({
           showForm: !this.state.showForm
       })
    }
  render () {
      return (
          <div style={{padding: 20}}>
              <Info onShowDevisForm={this.showDevisForm}/>
              <br/>
              {this.state.showForm && <DevisForm />}
          </div>
      );
  }
}

export default App;

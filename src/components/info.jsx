//stateless functionnal component
const Info = (props) => {
    return (
        <div>
            <h3>Générateur de devis</h3>
            <button onClick={props.onShowDevisForm}>Nouveau devis</button>
        </div>
    );
};

export default Info;

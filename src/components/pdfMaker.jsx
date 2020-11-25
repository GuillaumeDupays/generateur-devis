import React from 'react';
import ReactDOM from 'react-dom';
import {Document, Page, Text, View, StyleSheet, PDFViewer} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const totals = {
    totalWithoutTaxes: 0,
    taxes: 0,
    totalTaxeIncluded: 0
}

const totalWithoutTaxes = (items) => {
    const resultWithoutTaxes = Object.keys(items)
        .map(key => {
           const amount = parseFloat(items[key].amount, 10);
           const quantite = parseFloat(items[key].quantite, 10);
           return amount * quantite;
        })
        .reduce((accumulator, current) => accumulator + current );
        return totals.totalWithoutTaxes = parseFloat(resultWithoutTaxes.toFixed(2));
}
const totalTaxeIncluded = (items) => {
    const resultTaxeIncluded = Object.keys(items)
        .map(key => {
            const amount = parseFloat(items[key].amount, 10);
            const quantite = parseInt(items[key].quantite, 10);
            const taxe = parseFloat(items[key].taxe, 10);
            totals.taxes += (amount * quantite * 0.2);
            const result = ((amount * quantite) + (amount * quantite * taxe));
            console.log('result', result);
            return result;
        })
        .reduce((acc, curr) => acc + curr, 0);
    return totals.totalTaxeIncluded = parseFloat(resultTaxeIncluded.toFixed(2));
}
const MyDocument = ({text}) => (
    <Document>
        <Page size="A4"  style={styles.page}>
            <View style={styles.section}>
                <Text>Devis : {text.titre}</Text>
                <Text>n° : {text.id}</Text>
                <Text>Client : {text.prenomClient} {text.nomClient}</Text>
                <Text>Quantité : {text.quantite}</Text>
                <Text>Articles : </Text>
                {Object.keys(text.items).map((key, index) => (
                    <Text key={key}>
                        {text.items[key].quantite} &nbsp;
                        {text.items[key].description} &nbsp;
                        {parseFloat(text.items[key].taxe) * 100}% &nbsp;
                        {text.items[key].amount} Euros
                    </Text>
                    ))}
            </View>
        </Page>
    </Document>
);

export const renderPDFInDOM = estimateState => {
    console.log(estimateState);
    const Wrapper = () => (
        <PDFViewer>
            <MyDocument text={estimateState} />
        </PDFViewer>
    );

    ReactDOM.render(<Wrapper />, document.getElementById("pdf"));
};

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

const MyDocument = (props) => (
    <Document>
        <Page size="A4"  style={styles.page}>
            <View style={styles.section}>
                <Text>{props.text}</Text>
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

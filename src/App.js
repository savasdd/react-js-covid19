import './App.css';
import React from 'react';
import Card from "./components/Card/Card";
import Country from "./components/Country/Country";
import Chart from "./components/Chart/Cart";
import {fetchData} from "./util";
import {connect} from "react-redux";

let tut = '';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            country: '',
            grafik: this.props.grafik,
        }
    }


    async componentDidMount() {
        const res = await fetchData(null);
        this.setState({data: res});
    }


    componentWillMount() {
        console.log('COMPONENT WILL MOUNT ÇALIÞTI!')
    };

    componentWillReceiveProps(newProps) {
        this.coutryChange(tut);
        console.log('COMPONENT WILL RECIEVE PROPS!')
    };

    shouldComponentUpdate(newProps, newState) {
        console.log('SHOULD COMPONENT UPDATE ÇALIÞTI!');
        return true;
    };

    componentWillUpdate(nextProps, nextState) {
        console.log('COMPONENT WILL UPDATE ÇALIÞTI!');
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('COMPONENT DID UPDATE ÇALIÞTI!')
    };

    componentWillUnmount() {
        console.log('COMPONENT WILL UNMOUNT ÇALIÞTI!')
    };

    coutryChange = async (tut) => {
        //const res = await fetchData(sehir.target.value);
        const res = await fetchData(tut);
        this.setState({
            data: res,
            country: tut,
        });

    };


    render() {
        const {data, country, grafik} = this.state;
        return (
            <div className="container">
                <Card {...data}/>
                <Country coutryChange={this.coutryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }

};

const mapStateToProps = (state, props) => {
    tut = state.grafik;
    return state;
};

export default connect(mapStateToProps)(App);

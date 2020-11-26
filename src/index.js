import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

/*const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )
    return (
        <div>Hi there!</div>
    )
};*/


class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition (
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }
    render() {
        if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <Spinner message="Please accept location requirement"/>
    };
};



ReactDom.render(
    <App/>,
    document.querySelector('#root')
);

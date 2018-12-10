import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
 	//initializing state - gets connverted to constructor
    state = {lat: null, errorMessage: ""};
    componentDidMount(){
    	window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    renderContent = () =>{
    	if(!this.state.errorMessage && this.state.lat) {
        	return <SeasonDisplay lat={this.state.lat}/>;
        }
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        	return <Spinner message="Please allow location Access." />;
    }
    //we must define render method
    render() {
        return this.renderContent();
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
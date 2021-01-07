import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    // function inside of a class becomes a method that belongs to the class
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                // deconstructed from console.log(response.data.slip.advice)
                const { advice } = response.data.slip;
                console.log (advice)

                //sets value to property in state
                this.setState({ advice: advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        const { advice } = this.state;

        return (
            <h1>{advice}</h1>
        );
    }
}

export default App;
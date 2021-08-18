import React, {Component, useState} from "react";
import '../styles/App.css';

function  getCurrentTime(){
    const currentDate = new Date();
    // const hours = currentDate.getHours();
    // const mins = currentDate.getMinutes();
    // const  secs = currentDate.getSeconds();
    // currentDate.setHours(2);
    // currentDate.setMinutes(2);
    // currentDate.setSeconds(2);

    return currentDate.toLocaleTimeString().toUpperCase();
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: getCurrentTime()
        };
    }
    componentDidMount(){
        this.timeInterval = setInterval(() => {
            this.setState({time: getCurrentTime()});
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeInterval);
    }
    render() {
        return(
            <div className="Clock">
               <h3 id="time">{this.state.time}</h3>
            </div>
        )
    }
}


export default App;

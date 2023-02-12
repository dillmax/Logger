import React, { Component } from 'react';
import Loggerlist from '../components/Loggerlist'


class Logger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggerItems: [],
            newlogger: ''
    }
}

    render() {
        const { loggerItems, newlogger, } = this.state;

        return(
            <div>
                <h1>Logger</h1>

                <h2>Enter Your Logs</h2>

                <input value={newlogger} onChange={(event) => {
                    this.setState({
                        newlogger: event.target.value
                    })
                }} />
                
                <button onClick={() => {
                    this.setState({
                        loggerItems: [...loggerItems, {
                            id: newlogger,
                            name: newlogger,
                        }]
                    })
                }} >ADD</button>

                <button onClick={() => {
                    this.setState({loggerItems: []});

                }} >Clear</button>

                <h2>Your Log List</h2>

                <Loggerlist loggerItems={loggerItems} />
            </div>
        )
    }
}

export default Logger;
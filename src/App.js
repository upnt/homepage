import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0.0,
            minutes: 0
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 0.1
        }));
        if(this.state.seconds >= 60) {
            this.setState(state => ({
                seconds: 0.0
            }));
            this.setState(state => ({
                minutes: state.minutes + 1
            }));
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
          <div>
            Seconds: {this.state.seconds.toFixed(1)}
            <br />
            Minutes: {this.state.minutes}
          </div>
        );
    }
}

export default App;
